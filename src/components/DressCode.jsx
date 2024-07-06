const DressCode = () => {
  return (
    <section className="w-full bg-center bg-cover bg-[linear-gradient(to_bottom,rgba(0,0,0,.5),rgba(0,0,0,.5),rgba(0,0,0,.5)),url(/images/bg-dress-code.jpg)]">
      <div className="container pt-6 pb-24">
        <div className="text-secondary text-center mb-6">
          <h3 className="font-rochester text-2xl">Código de vestimenta</h3>
          <p className="font-poppins text-sm">*Omitamos el color verde esmeralda</p>
        </div>
        <h4 className="font-poppins text-xl text-center text-secondary uppercase">Formal</h4>
        <div className="flex justify-between text-secondary">
          <div className="text-center">
            <p className="text-sm mb-4 uppercase">Hombres</p>
            <p>Traje</p>
          </div>
          <div className="text-center">
            <p className="text-sm mb-4 uppercase">Mujeres</p>
            <p>Vestido</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DressCode;