import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { format } from 'd3'

import { Axis } from '../components/Axis'

export default {
  title: 'Parts/Axis',
  component: Axis,
} as ComponentMeta<typeof Axis>

const Template: ComponentStory<typeof Axis> = (args) => (
  <svg width="350">
    <Axis {...args} />
  </svg>
)

export const Primary = Template.bind({})
Primary.args = {
  scale: {
    type: 'linear',
    domain: [0, 100],
    range: [0, 280],
  },
  x: 5,
}

export const TickFormatter = (args: typeof Axis) => {
  return (
    <svg width="450">
      <Axis
        {...args}
        scale={{
          type: 'linear',
          domain: [0, 1],
          range: [0, 400],
        }}
        tickFormat={format('.0%')}
      />
    </svg>
  )
}
TickFormatter.args = {
  x: 15,
}
TickFormatter.parameters = {
  docs: {
    description: {
      story:
        'An example that uses a D3 tick format function to format the decimal values as a percentage.',
    },
  },
}

export const TickPadding = Template.bind({})
TickPadding.args = {
  scale: {
    type: 'linear',
    domain: [0, 100],
    range: [0, 280],
  },
  x: 5,
  tickPadding: 12,
}

export const Ticks = Template.bind({})
Ticks.args = {
  scale: {
    type: 'linear',
    domain: [0, 100],
    range: [0, 280],
  },
  x: 5,
  ticks: 3,
}

export const TickSize = Template.bind({})
TickSize.args = {
  scale: {
    type: 'linear',
    domain: [0, 100],
    range: [0, 280],
  },
  x: 5,
  tickSize: 20,
}

export const InnerTicksOnly = Template.bind({})
InnerTicksOnly.args = {
  scale: {
    type: 'linear',
    domain: [0, 100],
    range: [0, 280],
  },
  x: 5,
  tickSize: 0,
  tickSizeInner: 20,
}

export const OuterTicksOnly = Template.bind({})
OuterTicksOnly.args = {
  scale: {
    type: 'linear',
    domain: [0, 100],
    range: [0, 280],
  },
  x: 5,
  tickSize: 0,
  tickSizeOuter: 20,
  tickPadding: 23,
}

export const Thickness = Template.bind({})
Thickness.args = {
  axisLineThickness: 6,
  scale: {
    type: 'linear',
    domain: [0, 100],
    range: [0, 280],
  },
  tickLineThickness: 3,
  x: 5,
}

export const NonZeroRangeStart = Template.bind({})
NonZeroRangeStart.args = {
  scale: {
    type: 'linear',
    domain: [0, 100],
    range: [10, 290],
  },
}
NonZeroRangeStart.storyName = 'Non-Zero Range Start'
NonZeroRangeStart.parameters = {
  docs: {
    description: {
      story:
        'An example that uses a non-zero number for the range start value.',
    },
  },
}
