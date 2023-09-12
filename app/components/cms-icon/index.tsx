type CMSIconProps = {
   icon : string;
}
export const CMSIcon = ({icon} : CMSIconProps) => {
  return (
      // renderizar um elemento a partir de uma string html
      <div 
      dangerouslySetInnerHTML={{
        __html : icon
      }}
      />
  )
}