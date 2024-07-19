'use client'

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/sdcn/components/ui/tabs'
import { useState } from 'react'
import { Prompt } from '@/entities/prompt'
import { BrandAssetss } from '@/entities/brand-assets'

export const Tab = () => {
  const [currentTab, setCurrentTab] = useState('prompt')
  const [promptValue, setPromptValue] = useState('')
  const onPromptValueChange = (value: string) => {
    setPromptValue(value)
  }

  return (
    <>
      <div>current tab: {currentTab}</div>
      <Tabs
        value={currentTab}
        onValueChange={(value) => setCurrentTab(value)}
        className="w-[400px]"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="prompt">Prompt</TabsTrigger>
          <TabsTrigger value="brandassets">Brand Assetss</TabsTrigger>
        </TabsList>
        <TabsContent value="prompt">
          <Prompt value={promptValue} onValueChange={onPromptValueChange} />
        </TabsContent>
        <TabsContent value="brandassets">
          <BrandAssetss />
        </TabsContent>
      </Tabs>
    </>
  )
}
