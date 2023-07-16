export default async function asyncAwaitSample() {
    const url = 'https://api.github.com/users/yayaya012'

    type Profile = {
        login: string
        id: number
      }
    
    type FetchProfile = () => Promise<Profile | null>
    
    const fetchProfile: FetchProfile = async () => {
        const response = await fetch(url)
            .then((res) => res)
            .catch((error) => {
                console.error(error)
                return null
            })

        if (!response) {
            return null
        }

        const json = await response.json()
            .then((json: Profile) => {
                console.log('Asynchronous async/await Sample 1:', json)
                return json

            }).catch((error) => {
                console.error(error)
                return null
            })

        // jsonがnullならレスポンスBodyの読み取りに失敗している
        if (!json) {
            return null
          }
      
          return json
        }
    
        fetchProfile().then((profile: Profile | null) => {
          if (profile) {
            console.log('Asynchronous Promise Sample 2:', profile)
          }
        })
    
        // さらに同期的な処理にする
        const profile = await fetchProfile()
        if (profile) {
          console.log('Asynchronous Promise Sample 3:', profile)
        }
  }