import {hot} from 'react-hot-loader/root';
import * as React from 'react';

const settings = require('./settings.json');

class App extends React.Component<any, any> {

    state = {
        OneSignal: [],
        init: '',
        isPushNotificationsEnabled: '',
        setExternalUserId: '',
        externalUserId: '',
        removeExternalUserId: '',
        showSlidedownPrompt: '',
        setSubscription: '',
        showNativePrompt: '',
        registerForPushNotifications: '',
        permissionPromptDisplay: '',
        showHttpPrompt: '',
        getNotificationPermission: '',
        isPushNotificationsSupported: '',
        subscriptionChange: '',
        sendTag: '',
        deleteTag: '',
        getTags: '',
        sendSelfNotification: '',
        notificationDisplay: '',
        notificationDismiss: '',
    };

    private promptCounter: number;

    constructor(props: any) {
        super(props);

        this.promptCounter = 0;
    }

    init = () => {
        // @ts-ignore
        let OneSignal = window.OneSignal || [];

        this.setState({OneSignal});
        // @ts-ignore
        OneSignal.push(() => {
            OneSignal.init({
                appId: settings.appId,
            })
                .then((response: any) => {
                    this.setState({init: 'ok'});

                    OneSignal.on('permissionPromptDisplay', () => {
                        this.promptCounter++;
                        this.setState({permissionPromptDisplay: 'ok ' + this.promptCounter});
                    });

                    OneSignal.on('subscriptionChange', (isSubscribed: boolean) => {
                        this.setState({subscriptionChange: isSubscribed ? 'true' : 'false'});
                    });

                    OneSignal.on('notificationDisplay', (event: any) => {
                        this.setState({notificationDisplay: event.id});
                    });

                    OneSignal.on('notificationDismiss', (event: any) => {
                        this.setState({notificationDismiss: event.id});
                    });
                })
                .catch((error: any) => {
                    this.setState({init: 'error:' + error});
                });
        });
    }

    isPushNotificationsEnabled = () => {
        const {
            OneSignal,
        } = this.state;

        // @ts-ignore
        OneSignal.isPushNotificationsEnabled((isEnabled: boolean) => {
            this.setState({isPushNotificationsEnabled: isEnabled ? 'on' : 'off'});
        });

    }

    setExternalUserId = (userId: string) => {
        const {
            OneSignal,
        } = this.state;

        // @ts-ignore
        OneSignal.setExternalUserId(userId)
            .then((response: any) => {
                this.setState({setExternalUserId: 'ok'});

            })
            .catch((error: any) => {
                this.setState({setExternalUserId: 'error:' + error});
            });

    }

    getExternalUserId = () => {
        const {
            OneSignal,
        } = this.state;

        // @ts-ignore
        OneSignal.getExternalUserId()
            .then((response: any) => {
                this.setState({externalUserId: response});
            })
            .catch((error: any) => {
                this.setState({externalUserId: 'error:' + error});
            });

    }

    removeExternalUserId = () => {
        const {
            OneSignal,
        } = this.state;

        // @ts-ignore
        OneSignal.removeExternalUserId()
            .then((response: any) => {
                this.setState({removeExternalUserId: 'ok'});
            })
            .catch((error: any) => {
                this.setState({removeExternalUserId: 'error:' + error});
            });
    }

    setSubscription = (flag: boolean) => {
        const {
            OneSignal,
        } = this.state;

        // @ts-ignore
        OneSignal.setSubscription(flag)
            .then((response: any) => {
                this.setState({setSubscription: 'ok'});
            })
            .catch((error: any) => {
                this.setState({setSubscription: 'error:' + error});
            });
    }

    showSlidedownPrompt = () => {
        const {
            OneSignal,
        } = this.state;

        // @ts-ignore
        OneSignal.showSlidedownPrompt()
            .then((response: any) => {
                this.setState({showSlidedownPrompt: 'ok'});
            })
            .catch((error: any) => {
                this.setState({showSlidedownPrompt: 'error:' + error});
            });
    }

    showNativePrompt = () => {
        const {
            OneSignal,
        } = this.state;

        // @ts-ignore
        OneSignal.showNativePrompt()
            .then((response: any) => {
                this.setState({showNativePrompt: 'ok'});
            })
            .catch((error: any) => {
                this.setState({showNativePrompt: 'error:' + error});
            });
    }

    registerForPushNotifications = () => {
        const {
            OneSignal,
        } = this.state;

        // @ts-ignore
        OneSignal.registerForPushNotifications()
            .then((response: any) => {
                this.setState({registerForPushNotifications: 'ok'});
            })
            .catch((error: any) => {
                this.setState({registerForPushNotifications: 'error:' + error});
            });
    }

    showHttpPrompt = () => {
        const {
            OneSignal,
        } = this.state;

        // @ts-ignore
        OneSignal.showHttpPrompt()
            .then((response: any) => {
                this.setState({showHttpPrompt: 'ok'});
            })
            .catch((error: any) => {
                this.setState({showHttpPrompt: 'error:' + error});
            });
    }

    getNotificationPermission = () => {
        const {
            OneSignal,
        } = this.state;

        // @ts-ignore
        OneSignal.getNotificationPermission((permission) => {
            this.setState({getNotificationPermission: permission});
        })
    }

    isPushNotificationsSupported = () => {
        const {
            OneSignal,
        } = this.state;

        // @ts-ignore
        let isPushSupported = OneSignal.isPushNotificationsSupported();
        this.setState({isPushNotificationsSupported: isPushSupported ? 'true' : 'false'});
    }

    sendTag = () => {
        const {
            OneSignal,
        } = this.state;

        // @ts-ignore
        OneSignal.sendTag("key", "value")
            .then((response: any) => {
                this.setState({sendTag: 'ok'});
            })
            .catch((error: any) => {
                this.setState({sendTag: 'error:' + error});
            });
    }

    deleteTag = () => {
        const {
            OneSignal,
        } = this.state;

        // @ts-ignore
        OneSignal.deleteTag("key")
            .then((response: any) => {
                this.setState({deleteTag: 'ok'});
            })
            .catch((error: any) => {
                this.setState({deleteTag: 'error:' + error});
            });
    }

    getTags = () => {
        const {
            OneSignal,
        } = this.state;

        // @ts-ignore
        OneSignal.getTags((tags) => {
            this.setState({getTags: tags.key});
        })
    }

    sendSelfNotification = () => {
        const {
            OneSignal,
        } = this.state;

        // @ts-ignore
        OneSignal.sendSelfNotification(
            /* Title (defaults if unset) */
            "OneSignal Web Push Notification",
            /* Message (defaults if unset) */
            "Action buttons increase the ways your users can interact with your notification.",
            /* URL (defaults if unset) */
            'https://example.com/?_osp=do_not_open',
            /* Icon */
            'https://onesignal.com/images/notification_logo.png',
            {
                /* Additional data hash */
                notificationType: 'news-feature'
            },
            [{ /* Buttons */
                /* Choose any unique identifier for your button. The ID of the clicked button is passed to you so you can identify which button is clicked */
                id: 'like-button',
                /* The text the button should display. Supports emojis. */
                text: 'Like',
                /* A valid publicly reachable URL to an icon. Keep this small because it's downloaded on each notification display. */
                icon: 'http://i.imgur.com/N8SN8ZS.png',
                /* The URL to open when this action button is clicked. See the sections below for special URLs that prevent opening any window. */
                url: 'https://example.com/?_osp=do_not_open'
            },
                {
                    id: 'read-more-button',
                    text: 'Read more',
                    icon: 'http://i.imgur.com/MIxJp1L.png',
                    url: 'https://example.com/?_osp=do_not_open'
                }]
        )
            .then((response: any) => {
                this.setState({sendSelfNotification: 'ok'});
            })
            .catch((error: any) => {
                this.setState({sendSelfNotification: 'error:' + error});
            });
    }

    public render() {
        return (
            <>
                <div>
                    <button onClick={this.init}>INIT</button>
                    <span>&nbsp;{this.state.init}</span>
                </div>
                <hr/>
                <div>
                    <button onClick={this.isPushNotificationsEnabled}>isPushNotificationsEnabled</button>
                    <span>&nbsp;{this.state.isPushNotificationsEnabled}</span>
                </div>
                <hr/>
                <div>
                    <button onClick={e => this.setExternalUserId('denis100')}>setExternalUserId - 'denis100'</button>
                    <button onClick={e => this.setExternalUserId('denis200')}>setExternalUserId - 'denis200'</button>
                    <span>&nbsp;{this.state.setExternalUserId}</span>
                </div>
                <hr/>
                <div>
                    <button onClick={this.getExternalUserId}>getExternalUserId</button>
                    <span>&nbsp;ExternalUserId: {this.state.externalUserId}</span>
                </div>
                <hr/>
                <div>
                    <button onClick={this.removeExternalUserId}>removeExternalUserId</button>
                    <span>&nbsp;{this.state.removeExternalUserId}</span>
                </div>
                <hr/>
                <div>
                    <button onClick={e => this.setSubscription(true)}>setSubscription TRUE</button>
                    <button onClick={e => this.setSubscription(false)}>setSubscription FALSE</button>
                    <span>&nbsp;{this.state.setSubscription}</span>
                </div>
                <hr/>
                <div>
                    <span>SubscriptionChange: &nbsp;{this.state.subscriptionChange}</span>
                </div>
                <hr/>
                <div>
                    <button onClick={this.showSlidedownPrompt}>showSlidedownPrompt</button>
                    <span>&nbsp;{this.state.showSlidedownPrompt}</span>
                </div>
                <hr/>
                <div>
                    <button onClick={this.showNativePrompt}>showNativePrompt</button>
                    <span>&nbsp;{this.state.showNativePrompt}</span>
                </div>
                <hr/>
                <div>
                    <span>&nbsp;permissionPromptDisplay: {this.state.permissionPromptDisplay}</span>
                </div>
                <hr/>
                <div>
                    <button onClick={this.registerForPushNotifications}>registerForPushNotifications</button>
                    <span>&nbsp;{this.state.registerForPushNotifications}</span>
                </div>
                <hr/>
                <div>
                    <button onClick={this.showHttpPrompt}>showHttpPrompt</button>
                    <span>&nbsp;{this.state.showHttpPrompt}</span>
                </div>
                <hr/>
                <div>
                    <button onClick={this.getNotificationPermission}>getNotificationPermission</button>
                    <span>&nbsp;{this.state.getNotificationPermission}</span>
                </div>
                <hr/>
                <div>
                    <button onClick={this.isPushNotificationsSupported}>isPushNotificationsSupported</button>
                    <span>&nbsp;{this.state.isPushNotificationsSupported}</span>
                </div>
                <hr/>
                <div>
                    <button onClick={this.sendTag}>sendTag</button>
                    <span>&nbsp;{this.state.sendTag}</span>
                </div>
                <hr/>
                <div>
                    <button onClick={this.deleteTag}>deleteTag</button>
                    <span>&nbsp;{this.state.deleteTag}</span>
                </div>
                <hr/>
                <div>
                    <button onClick={this.getTags}>getTags</button>
                    <span>&nbsp;{this.state.getTags}</span>
                </div>
                <hr/>
                <div>
                    <button onClick={this.sendSelfNotification}>sendSelfNotification</button>
                    <span>&nbsp;{this.state.sendSelfNotification}</span>
                </div>
                <hr/>
                <div>
                    <span>&nbsp;notificationDisplay: {this.state.notificationDisplay}</span>
                </div>
                <div>
                    <span>&nbsp;notificationDismiss: {this.state.notificationDismiss}</span>
                </div>
            </>
        );
    }
}

export default hot(App);