import { useCallback, useState } from "react"
import { useDispatch } from "react-redux";

/**@description - custom hook to use different async thunks */

const useThunk = (thunk) =>{
  // state to store isloading 
  const [ isLoading, setIsLoading ] = useState(false);
  // to store error
  const [ error, setError ] = useState(null);

  // to access the dispatch function of redux
  const dispatch = useDispatch();

  // to get the stable reference of the function and to avoid multiple renders
  const runThunk = useCallback((arg) =>{
    setIsLoading(true);
    dispatch(thunk(arg))
      .unwrap()
      .catch(err => setError(err))
      .finally(() => setIsLoading(false))
  }, [dispatch, thunk])

  return [ runThunk, isLoading, error ]

}

export default useThunk;
