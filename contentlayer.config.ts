import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    path: { type: 'string', required: true },
    length: { type: 'number', },
  },
}))

export default makeSource({ contentDirPath: 'posts', documentTypes: [Post] })
