import React from 'react'
import {ColorItem, ColorsList} from '@/components/sidebar/createTaskFolder/style';
import classNames from 'classnames'

const ColorsSelect = React.memo(({colors, selectedColor, onSelectColorClickHandler}) => {

  return (
    <ColorsList>
      {colors.map(color => (
        <ColorItem key={color}
                   fill={color}
                   activeClass={classNames({selected: selectedColor === color})}
                   onClick={() => onSelectColorClickHandler(color)}
        />
      ))
      }

    </ColorsList>
  )
})

export default ColorsSelect