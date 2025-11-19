export default function Pricing(){
  return (
    <section id="pricing" className="relative py-20 sm:py-24 bg-slate-950">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Simple pricing</h2>
        <p className="mt-2 text-blue-100/80 text-center">Start free. Upgrade anytime.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-4 sm:gap-6">
          {[{
            name:'Free', price:'$0', features:['Planner','Basic logging','Mobile responsive']
          },{
            name:'Pro', price:'$6/mo', features:['All Free','Progress charts','Templates','Priority support']
          },{
            name:'Team', price:'$12/mo', features:['Coach dashboard','Client sharing','Export CSV']
          }].map(t => (
            <div key={t.name} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <p className="mt-2 text-3xl font-bold">{t.price}</p>
              <ul className="mt-4 space-y-2 text-blue-100/85 text-sm">
                {t.features.map(f => <li key={f}>• {f}</li>)}
              </ul>
              <button className="mt-6 w-full rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 py-2.5 font-medium">Choose</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
