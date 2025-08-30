// src/collections/Blogs.ts
import { CollectionConfig } from 'payload'

export const Blogs: CollectionConfig = {
  slug: 'blogs',
  admin: {
    useAsTitle: 'name',
  },
  // --- THIS IS THE FIX ---
  // We are adding an access control rule
  access: {
    read: () => true, // Anyone can read these blogs
  },
  // --- END OF FIX ---
  fields: [
    {
      name: 'name',
      label: 'Blog Name',
      type: 'text',
      required: true,
    },
    {
      name: 'domain',
      label: 'Domain or Slug',
      type: 'text',
      required: true,
      unique: true,
    },
  ],
}
