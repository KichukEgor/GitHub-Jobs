import { createElement } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type TProps ={
  className: string
  defaultValues?: any
  children: any
  onSubmit: SubmitHandler<any>
}

export const Form = ({
  className, defaultValues, children, onSubmit
}: TProps) => {
  const methods = useForm({ defaultValues })
  const { handleSubmit } = methods

  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)}>
      {Array.isArray(children)
        ? children.map((child) => (child.props.name
          ? createElement(child.type, {
            ...{
              ...child.props,
              register: methods.register,
              key: child.props.name
            }
          })
          : child))
        : children}
    </form>
  )
}
