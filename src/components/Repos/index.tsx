import React from 'react'

const Repos = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000))
  const response = await fetch('https://api.github.com/users/reissouza/repos', {
    cache: 'no-store',
  })
  const repos = await response.json()
  return (
    <div>
      <pre>{JSON.stringify(repos, null, 2)}</pre>
    </div>
  )
}

export default Repos
