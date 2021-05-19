import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Movie } from '../interfaces/movieInterface'

interface Props {
  movie: Movie
}

const MoviePoster = ({ movie }: Props) => {

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  return (
    <View style={styles.imageWrapper}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri }}
          style={styles.image}
        />
      </View>
    </View>
  )
}

export default MoviePoster

const styles = StyleSheet.create({
  imageWrapper: {
    width: 300,
    height: 420,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,    
    elevation: 10,
  },
  image: {
    flex: 1,
    borderRadius: 18
  }
});
