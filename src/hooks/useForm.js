import { useReducer } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { stringifyUrl, parse } from 'query-string'
import { flow, omitBy, isEmpty } from 'lodash/fp'

const initialState = {
  q: '',
  orderBy: 'relevance',
  filter: '',
  printType: 'all'
}

function reducer(state, action) {
  switch (action.type) {
    case 'change':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

function useForm() {
  const history = useHistory()
  const location = useLocation()
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    ...parse(location.search)
  })

  // console.log(state)
  // filter: ""
  // orderBy: "relevance"
  // printType: "all"
  // q: "벨로퍼트"

  // parse : 쿼리 문자열을 개체로 구문 분석합니다
  //console.log((location.search))
  // result?   <orderBy=relevance&printType=all&q=벨로퍼트> 얘가 location.search임

  //console.log(parse(location.search))
  // orderBy: "relevance"
  // printType: "all"
  // q: "벨로퍼트

  function handleRouter(query) {
    const path = stringifyUrl({
      url: '/result',
      query
    })

    // console.log(path)
    // path : /result?orderBy=relevance&printType=all&q=%EB%B2%A8%EB%A1%9C%ED%8D%BC%ED%8A%B8
    // ulr: /result
    // query : ?orderBy=relevance&printType=all&q=%EB%B2%A8%EB%A1%9C%ED%8D%BC%ED%8A%B8
    //stringifyUrl : URL 쿼리 문자열 구문 분석 및 문자열 화
    history.push(path)
  }

  function handleSubmit(e) {
    e.preventDefault()

    const query = flow(omitBy(isEmpty))(state)

    // console.log(query)
    // orderBy: "relevance"
    // printType: "all"
    // q: "벨로퍼트"

    handleRouter(query)
  }

  function handleChange(e) {
    const { name, value } = e.target

    dispatch({
      type: 'change',
      payload: {
        [name]: value
      }
    })
  }

  return {
    state,
    handleChange,
    handleSubmit
  }
}

export default useForm
