const React = require('react')

exports.onPreRenderHTML = ({ getPostBodyComponents, replacePostBodyComponents }) => {
  replacePostBodyComponents(
    getPostBodyComponents()
      .map(component => React.cloneElement(component, {
        defer: true
      }))
  )
}
