import { makeRequests } from '@/api/request'

export const getRepoReadme = ({ owner, repo }) => {
  const contentHeader = 'application/vnd.github.v3.html+json'
  return makeRequests({
    headers: contentHeader,
    url: '/repos/golova-hub/gitogram4/readme'
  })
}
