import mapReducer from '../client/reducers/mapReducer'

test('should return the initial state', () => {
  expect(mapReducer(undefined, {})).toEqual(
    {
      currentCity: '',
      currentCountry: ''
    })
})
