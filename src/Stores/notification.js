import { faker } from "@faker-js/faker";
import { defineStore } from "pinia";

export const useNotificationStore = defineStore('notification', {
  state: () => ({
    items: []
  }),
  actions: {
    generate(length = 10) {
      this.items = factoryData(length)
    },
    add (data) {
      this.items.unshift({
        ...data,
        createdAt: new Date(),
      })
    }
  }
})

export function factoryData(length = 10) {
  const items = []

  for (let index = 0; index < length; index++) {
    items.push({
      id: index + 1,
      type: faker.helpers.arrayElement(['assignment', 'discussion', 'reminder', 'announcement']),
      title: faker.lorem.words(),
      message: faker.lorem.words(10),
      recipientId: faker.helpers.arrayElement([2,3]),
      senderId: 1,
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    })
  }

  return items
}
