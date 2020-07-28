import React from 'react'
import Loadable from 'react-loadable'

const loadingComponent = () => <div>这在加载~</div>

export default (loader, loading = loadingComponent) => {
  return Loadable({
    loader,
    loading
  })
}
