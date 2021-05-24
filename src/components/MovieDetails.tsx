import React from 'react'
import { View, Text } from 'react-native'
import currencyFormatter from 'currency-formatter';

import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

const MovieDetails = ({ movieFull, cast }: Props) => {
  return (
    <>
      {/* Detalles */}
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <Icon name="star-outline" color="grey" size={16} />
          <Text> {movieFull.vote_average} </Text>
          <Text style={{ marginLeft: 5 }}>
            - {movieFull.genres.map(m => m.name).join(', ')}
          </Text>
        </View>

        {/* Historia */}
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
          Historia
        </Text>

        <Text style={{ fontSize: 16 }}>{movieFull.overview}</Text>

        {/* Presupuesto */}
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
          Presupuesto
        </Text>
        <Text style={{ fontSize: 18 }}>
          {currencyFormatter.format(movieFull.budget, { code: 'USD' })}
        </Text>

      </View>


      {/* Casting */}
    </>
  )
}

export default MovieDetails