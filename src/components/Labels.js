import React from "react"
import { Text } from "react-native-svg"

const Labels = ({ slices, height, width }) => {
  return slices.map((slice, index) => {
      const { labelCentroid, pieCentroid, data } = slice;
      const percentage = (data.amount / data.totalNumVoters).toFixed(1)*100;

      let labelStroke;
      data.svg.fill == "#f4f4f4" ? labelStroke = "#f4f4f4" : labelStroke = "black"

      return (
          <Text
              key={index}
              x={pieCentroid[ 0 ]}
              y={pieCentroid[ 1 ]}
              fill={'#f4f4f4'}
              textAnchor={'middle'}
              alignmentBaseline={'middle'}
              fontSize={20}
              stroke={labelStroke}
              strokeWidth={0.6}
          >
              {percentage}%
          </Text>
      )
  })
}

export default Labels
