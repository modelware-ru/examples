
  var OneSignal = window.OneSignal || [];
  OneSignal.push(function() {
    OneSignal.init({
      appId: "3beb3078-e0f1-4629-af17-fde833b9f716",
      //requiresUserPrivacyConsent: true
    });
    var isPushSupported = OneSignal.isPushNotificationsSupported();
    console.log("isPushSupported: ", isPushSupported);
    if (isPushSupported) {
      console.log("Push is supported");
    } else {
      console.log("Push is not supported");
    }

  });




    /*Tag Examples*/
    function onAddToCartButton() {
      OneSignal.push(function() {
        let timestamp = Math.floor(Date.now() / 1000);
        OneSignal.sendTags({
          cart_item: 'Sunglasses',
          cart_update: timestamp,
        }).then(function(tagsSent) {
        // Callback called when tags have finished sending
        console.log("tagsSent: ", tagsSent);
        });
      });
    }

    function tagUser() {
      OneSignal.push(function() {
        OneSignal.sendTag(document.getElementById("tagKey").value, document.getElementById("tagValue").value)
          .then(function(tagsSent) {
            // Callback called when tags have finished sending
            console.log("tagsSent: ", tagsSent);
          });
      });
    }

    function deleteCartTags() {
      OneSignal.push(function() {
        OneSignal.deleteTags(["cart_item", "cart_update"], function(tagsDeleted) {
          // Callback called when tags have been deleted
          console.log("tagsDeleted: ", tagsDeleted);
        });
      })
    }

    function sendOutcome() {
      OneSignal.push(function() {
        OneSignal.sendOutcome("clicked_button");
        console.log("Outcome sent");
      })
    }

    function sendOutcomeWithValue() {
      OneSignal.push(function() {
        OneSignal.sendOutcome("purchase", 100);
        console.log("Outcome sent");
      })
    }

    function onTrackCookiesButton() {
      if (document.querySelector('#trackCookiesButton').textContent === "OK to track cookies") {
        OneSignal.push(function() {
          console.log("consent provided: true");
          OneSignal.provideUserConsent(true);
        });
        document.querySelector('#trackCookiesButton').textContent = "Disable Cookie Tracking";
      } else if (document.querySelector('#trackCookiesButton').textContent === "Disable Cookie Tracking") {
        OneSignal.push(function() {
          console.log("consent provided: false");
          OneSignal.provideUserConsent(false);
        });
        document.querySelector('#trackCookiesButton').textContent = "OK to track cookies";
      }
    }

    function onLoginButton() {
      if (document.querySelector('#loginbutton').textContent === "Login/SetExternalUserId") {
        //Make server call to validate user in database and fetch user id
        var userId = Math.floor(1000000000 + Math.random() * 9000000000);
        OneSignal.push(function() {
          OneSignal.setExternalUserId(userId);
          console.log("called setExternalUserId to add external_user_id in OneSignal with id: ", userId);
          OneSignal.getUserId(function(userId) {
            console.log("OneSignal User ID:", userId);
          });
        });
        document.querySelector('#loginbutton').textContent = "Log Out/RemoveExternalUserId"
      } else if (document.querySelector('#loginbutton').textContent === "Log Out/RemoveExternalUserId") {
        OneSignal.push(function() {
          OneSignal.removeExternalUserId();
          console.log("called removeExternalUserId to remove external_user_id from OneSignal record");
        });
        document.querySelector('#loginbutton').textContent = "Login";
      }
    }

    function sendSelfNotification() {
      OneSignal.push(function() {
        OneSignal.sendSelfNotification("Custom Title", "Custom Message", "https://jfishman1.github.io/tagging");
      });
    }

    function showCategorySlidedown() {
      OneSignal.push(function() {
        OneSignal.showCategorySlidedown();
      })
    }

    OneSignal.push(["getNotificationPermission", function(permission) {
      console.log("Site Notification Permission:", permission);
      // (Output) Site Notification Permission: default
    }]);

    OneSignal.push(["addListenerForNotificationOpened", function(payload) {
      console.log("OneSignal Notification Clicked Paylaod:");
      console.log(payload);
      console.log(payload.data);
      /*var topic = payload.data.topic;
      console.log("topic: ", topic);
      OneSignal.sendTag("topic", topic).then(function(tagsSent) {
        console.log("tagsSent: ", tagsSent)
      });*/
      OneSignal.getUserId( function(userId) {
        console.log("OneSignal User ID:", userId);
        // Make a POST call to GA with the notification data and userId aka playerId
        // https://developers.google.com/analytics/devguides/collection/analyticsjs/sending-hits#hitcallback
        ga('send', {
          hitType: 'event',
          eventCategory: 'os_addListenerForNotificationOpened',
          eventAction: 'u_id ' + userId,
          eventLabel: 'n_id ' + payload.id,
          hitCallback: function() {
            console.log("ga os_addListenerForNotificationOpened callback");
          }
        });
      });
    }]);

  OneSignal.push(function() {
    // Occurs when the user's subscription changes to a new value.
    OneSignal.on('notificationPermissionChange', function(permissionChange) {
      var currentPermission = permissionChange.to;
      console.log('New permission state:', currentPermission);
      OneSignal.getUserId( function(userId) {
        ga('send', {
          hitType: 'event',
          eventCategory: 'os_notificationPermissionChange',
          eventAction: 'u_id ' + userId,
          eventLabel: currentPermission,
          hitCallback: function() {
            console.log("ga os_notificationPermissionChange callback");
          }
        });
      });
    });

    // Occurs when native browser prompt is shown
    OneSignal.on('permissionPromptDisplay', function() {
      console.log("The native prompt displayed");
      ga('send', {
        hitType: 'event',
        eventCategory: 'os_permissionPromptDisplay',
        eventAction: 'displayed',
        hitCallback: function() {
          console.log("ga os_permissionPromptDisplay callback");
        }
      });
    });

    // Occurs when the user's subscription changes to a new value.
    OneSignal.on('subscriptionChange', function (isSubscribed) {
      console.log("The user's subscription state is now:", isSubscribed);
      var userId = Math.floor(1000000000 + Math.random() * 9000000000);
      OneSignal.push(function() {
        OneSignal.setExternalUserId(userId);
        console.log("called setExternalUserId to add external_user_id in OneSignal with id: ", userId);
        OneSignal.getUserId(function(userId) {
          console.log("OneSignal User ID:", userId);
        });
      });
      OneSignal.getUserId( function(userId) {
        ga('send', {
          hitType: 'event',
          eventCategory: 'os_subscriptionChange',
          eventAction: 'u_id ' + userId,
          eventLabel: isSubscribed,
          hitCallback: function() {
            console.log("ga os_subscriptionChange callback");
          }
        });
        console.log(userId);
      })
    });

    OneSignal.on('notificationDisplay', function (event) {
      console.log('OneSignal notification displayed:', event);
      console.log('OneSignal notification id:', event.id);
      console.log('OneSignal notification title:', event.heading);
      console.log('OneSignal notification content:', event.content);
      console.log('OneSignal notification url:', event.url);
      console.log('OneSignal notification icon:', event.icon);
    });

    OneSignal.on('popoverShown', function() {
      console.log('Slide Prompt Shown');
    });
    OneSignal.on('popoverAllowClick', function() {
      console.log('Slide Prompt Allowed');
    });
    OneSignal.on('popoverCancelClick', function () {
      console.log('Slide Prompt Canceled');
    });
    OneSignal.on('popoverClosed', function() {
      console.log('Slide Prompt Closed');
    });
  });
