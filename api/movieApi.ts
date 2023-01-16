import { IMovie } from '../types/IMovie'

export const getMovie = async (
): Promise<IMovie> =>
  await fetch(`http://localhost:8090/api/movie`).then((val) => val.json())