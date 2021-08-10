import React from 'react'
import useSearch from '../../hooks/useSearch'

function SearchForm() {
  const { state, handleChange, handleSubmit } = useSearch()

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      {/* fieldset 꼭 필요한가? */}
      <fieldset>
        <label htmlFor="searchBook" className={styles.label}>
          <input type="hidden" />
          <span hidden>검색어</span>
          <input
            type="search"
            id="searchBook"
            name="q"
            defaultValue={state.q}
            placeholder="제목, 저자, 출판사를 검색해 보세요"
            required
            onChange={handleChange}
            className={styles.input}
          />
        </label>
        <button type="submit" className={styles.submit}>
          검색
        </button>
      </fieldset>
    </form>
  )
}

const styles = {
  wrapper: 'flex items-center justify-between sticky',
  label: 'mb-1 text-gray-700',
  input: 'w-64 h-8 px-2 border border-r-0 rounded-l focus:outline-none text-sm',
  submit:
    'h-8 px-4 rounded-r bg-blue-500 hover:bg-blue-700 text-white align-top'
}

export default SearchForm
