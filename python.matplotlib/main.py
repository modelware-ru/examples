import matplotlib.pyplot as plt
import matplotlib.gridspec as gridspec
from matplotlib.ticker import (MultipleLocator, FormatStrFormatter, AutoMinorLocator)
import numpy as np

# x = np.linspace(0, 10, 50)
# y1 = x
#
# y2 = [i ** 2 for i in x]
#
# plt.figure(figsize=(9, 9))
# plt.subplot(2, 1, 1)
# plt.plot(x, y1)
# plt.title('Линейная зависимость y1 = x, y2 = x^2')
# plt.ylabel('y1', fontsize=14)
# plt.grid(True)
#
# plt.subplot(2, 1, 2)
# plt.plot(x, y2)
# plt.xlabel('x', fontsize=14)
# plt.ylabel('y2', fontsize=14)
# plt.grid(True)

# fruits = ['apple', 'peach', 'orange', 'bannana', 'melon']
# counts = [34, 25, 43, 31, 17]
#
# plt.bar(fruits, counts)
# plt.title('Fruits!')
# plt.xlabel('Fruit')
# plt.ylabel('Count')

# x = np.linspace(0, 10, 10)
# y1 = 4 * x
# y2 = [i ** 2 for i in x]
#
# fig, ax = plt.subplots(figsize=(8, 6))
#
# ax.set_title('График зависимостей: y1=4*x, y2=x^2', fontsize=16, loc='left')
# ax.set_xlabel('x', fontsize=14)
# ax.set_ylabel('y1, y2', fontsize=14)
# # ax.set_text(1, 1, 'type: Steel')
# ax.grid(which='major', linewidth=1.2)
# ax.grid(which='minor', linestyle='--', color='grey', linewidth=0.5)
# ax.scatter(x, y1, c='red', label='y1 = 4*x')
# ax.plot(x, y2, label='y2 = x^2')
# ax.legend()
#
# ax.xaxis.set_minor_locator(AutoMinorLocator())
# ax.yaxis.set_minor_locator(AutoMinorLocator())
# ax.tick_params(which='major', length=10, width=2)
# ax.tick_params(which='minor', length=5, width=1)
#
# plt.show()


# x = [1, 2, 3, 4, 5]
# y1 = [9, 4, 2, 4, 9]
# y2 = [1, 7, 6, 3, 5]
# y3 = [-7, -4, 2, -4, -7]
#
# fg = plt.figure(figsize=(7, 3), constrained_layout=True)
# gs = gridspec.GridSpec(ncols=2, nrows=2, figure=fg)
# fig_ax_1 = fg.add_subplot(gs[0, :])
# plt.plot(x, y1)
# fig_ax_2 = fg.add_subplot(gs[1, 0])
# plt.plot(x, y2)
# fig_ax_3 = fg.add_subplot(gs[1, 1])
# plt.plot(x, y3)
# plt.title('title')
# plt.suptitle('suptitle')
# plt.show()

# np.random.seed(123)
# vals = np.random.randint(10, size=(7, 7))
# plt.pcolor(vals, cmap=plt.get_cmap('viridis', 11))
# plt.colorbar()
# plt.show()

# x = [1, 5, 10, 15, 20]
# y1 = [1, 7, 3, 5, 11]
# y2 = [4, 3, 1, 8, 12]
# plt.figure(figsize=(12, 7))
# plt.plot(x, y1, 'o-r', alpha=0.7, label='first', lw=5, mec='b', mew=2, ms=10)
# plt.fill_between(x, y1)
# plt.plot(x, y2, 'v-.g', label='second', mec='r', lw=2, mew=2, ms=12)
# plt.legend()
# plt.grid(True)
# plt.show()

x = np.arange(0.0, 5, 0.01)
y = np.cos(x * np.pi)
m_ev_case = [None, 10, (100, 30), slice(100, 400, 15), [0, 100, 200, 300], [10, 50, 100]]
fig, ax = plt.subplots(2, 3, figsize=(10, 7))
axs = [ax[i, j] for i in range(2) for j in range(3)]
for i, case in enumerate(m_ev_case):
    axs[i].set_title(str(case))
    axs[i].plot(x, y, 'o', ls='-', ms=7, markevery=case)
plt.show()
