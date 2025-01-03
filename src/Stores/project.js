import { defineStore } from "pinia";

export const useProjectStore = defineStore('project', {
  state: () => ({
    items: factoryData()
  }),
  actions: {
    // {name, description, fileType, fileUrl, members}
    add (data) {
      this.items.unshift({
        ...data,
        fileType: data.fileType ?? 'video',
        createdAt: new Date(),
      })
    }
  }
})

export function factoryData() {
  return [
    {
      id: 1,
      name: 'Website Redesign',
      description: 'Complete overhaul of company website with modern design and improved user experience',
      fileType: 'image',
      fileUrl: 'https://picsum.photos/40/40',
      members: [
        {name: 'John', image: 'https://picsum.photos/40'},
        {name: 'Jane', image: 'https://picsum.photos/40'},
      ],
      createdAt: '2024-01-15T10:00:00'
    },
    {
      id: 2,
      name: 'Documentation',
      description: 'Technical documentation for the new API implementation',
      fileType: 'pdf',
      fileUrl: null,
      createdAt: '2024-01-16T15:30:00'
    },
    // Add more projects as needed
  ]
}
