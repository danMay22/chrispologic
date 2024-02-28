

export default function Contact() {
  return (
    <div className="bg-white py-24 sm:py-32 flex items-start">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
         
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Midrand</h2>
              <p className="mt-4 leading-7 text-gray-600">
              917 Morkels CI, Halfway House,<br>
              </br>
              Midrand, Unit 72, South Africa
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Sundays: </h3>
                <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                  <p></p>
                  <p>10:00AM-12:00PM</p>
                </address>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Tuesday Prayer, Virtual: </h3>
                <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                  <p></p>
                  <p>6:30PM-7:00PM</p>
                </address>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
