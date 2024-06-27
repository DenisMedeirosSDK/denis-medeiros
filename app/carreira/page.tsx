interface Carrer {
  id: string
  name: string
  type: 'Certificado' | 'Trabalho'
  date: Date
}

const CARRER_LIST: Carrer[] = [
  {
    id: '1',
    name: 'Ignite - Node.js',
    date: new Date(2021, 1, 1),
    type: 'Certificado'
  },
  {
    id: '2',
    name: 'Ignite - React.js',
    date: new Date(2023, 1, 1),
    type: 'Certificado'
  },

]


export default async function Carrer() {
  return (
    <main className="flex flex-col w-full max-w-screen-xl mx-auto p-6">
      <div className="flex flex-col gap-3 mt-10">
        {
          CARRER_LIST.map(item => {
            return (
              <div key={item.id} className="h-36 w-full bg-[#030E2F]/70 rounded-xl flex flex-col justify-center items-center p-6 gap-3">
                <div className="flex flex-row text-2xl">
                  <p>{item.type} {item.name} {item.date.getFullYear()}</p>
                </div>
                <span className="text-sm">f202bdc9-4f0d-4c73-a79e-e6c5c184e2c5</span>
              </div>
            )
          })
        }

      </div>
    </main>
  )
}