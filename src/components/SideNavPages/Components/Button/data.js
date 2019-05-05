const buttonTypes = [
  {
    type: 'Default',
    styles:[
      {
        label: "default",
        color: 'default',
        variant: 'text',
        size: 'medium'
      },
      {
        label: "primary",
        color: 'primary',
        variant: 'text',
        size: 'medium'
      },
      {
        label: "secondary",
        color: 'secondary',
        variant: 'text',
        size: 'medium'
      },
      {
        label: "disabled",
        color: 'default',
        variant: 'text',
        size: 'medium',
        disabled: true
      },
    ]
  },
  {
    type: 'Outlined',
    styles:[
      {
        label: "default",
        color: 'default',
        variant: 'outlined',
        size: 'medium'
      },
      {
        label: "primary",
        color: 'primary',
        variant: 'outlined',
        size: 'medium'
      },
      {
        label: "secondary",
        color: 'secondary',
        variant: 'outlined',
        size: 'medium'
      },
      {
        label: "disabled",
        color: 'default',
        variant: 'outlined',
        size: 'medium',
        disabled: true
      },
    ]
  },
  {
    type: 'Contained',
    styles:[
      {
        label: "default",
        color: 'default',
        variant: 'contained',
        size: 'medium'
      },
      {
        label: "primary",
        color: 'primary',
        variant: 'contained',
        size: 'medium'
      },
      {
        label: "secondary",
        color: 'secondary',
        variant: 'contained',
        size: 'medium'
      },
      {
        label: "disbled",
        color: 'default',
        variant: 'contained',
        size: 'medium',
        disabled: true
      },
    ]
  },
  {
    type: 'Size',
    styles:[
      {
        label: "small",
        color: 'default',
        variant: 'contained',
        size: 'small'
      },
      {
        label: "medium",
        color: 'primary',
        variant: 'contained',
        size: 'medium'
      },
      {
        label: "disabled",
        color: 'default',
        variant: 'contained',
        size: '',
        disabled: true
      },
      {
        label: "large",
        color: 'secondary',
        variant: 'contained',
        size: 'large'
      },
    ]
  }
]

export default {buttonTypes};
