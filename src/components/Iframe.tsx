interface IframeProps {
  src: string;
  width: string;
  height: string;
  [k: string]: any;
}

export const Iframe = ({src, width, height, ...rest}:IframeProps) => {
  return (
    <div style={{padding: '20px'}}>
      <iframe src={src} width={width} height={height} {...rest}/>
    </div>
  )
}