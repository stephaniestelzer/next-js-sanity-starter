import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {page} from './schemaTypes/page'

export default defineConfig({
  name: 'default',
  title: 'stephanie-stelzer-portfolio',

  projectId: 'y00bu45p',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [page],
  },
})
