import PropTypes from 'prop-types'

export default function AddCategory({onNewCategory, value, setValue}) {

    const handlerSubmit = (e) => {
        e.preventDefault()
        const newCategory = e.target.value.trim()
        if(newCategory.length > 2 ){
            onNewCategory(newCategory)
        }

    }

  return (
    <>  
        <form action="" aria-label='form' onSubmit={(e)=>{
            handlerSubmit(e)
        }}>
            <input 
            type="text" 
            placeholder='Busca tus gifs'
            value={value}
            onChange={(e)=>{
                setValue(e.target.value)
            }}
            />
        </form>

    </>
  )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired
}