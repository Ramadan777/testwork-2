import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadingPhotos, removePhotos } from './action'
import './style.css'

function App() {
  const photos = useSelector(state => state.photos)
  const loading = useSelector(state => state.loading)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingPhotos())
  }, []);

  const handleDelete = (id) => {
    dispatch(removePhotos(id))
  }

  return (
    <div className="photos">
      {loading ? 'идет загрузка...' : (
        photos.map(photo => {
          return (
            <div className="image">
              <span onClick={() => handleDelete(photo.id)}>X</span>
              <img src={photo.thumbnailUrl} alt=""/>
            </div>
          )
        })
      )}
    </div>
  );
}

export default App;
