import '../stylesheets/contador.css'

export const Contador = ({ numClick }) => {
   return (
      <div className='contador'>
         {numClick}
      </div>
   )
}
