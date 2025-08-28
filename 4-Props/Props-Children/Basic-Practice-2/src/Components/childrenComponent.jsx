import Styles from './childrenComponent.module.css'

function ChildrenComponent({children}) {
  return (
    <div className={Styles.card}>{children}</div>
  )
}

export default ChildrenComponent;