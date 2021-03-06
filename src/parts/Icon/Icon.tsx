import * as React from 'react';
import styled from 'styled-components';
import{ArrowRight}from'./icons/ArrowRight';import{Cheapestkeys}from'./icons/Cheapestkeys';import{Github}from'./icons/Github';import{Globe}from'./icons/Globe';import{Instagram}from'./icons/Instagram';import{Linkedin}from'./icons/Linkedin';import{Notify}from'./icons/Notify';import{Twitter}from'./icons/Twitter';
interface IconProps {
  name: string;
  color?: any;
  size?: any;
  style?: React.CSSProperties;
  className?: any;
  onClick?: any;
}
export const Icon: React.FC<IconProps> = (props) => {
  const {style, className, onClick} = props;
  return (
    <IconBody className={className} style={{...style}} onClick={onClick}>
      { props.name === 'arrow-right' && <ArrowRight color={props.color} style={{ width: props.size, height: props.size }} /> }{ props.name === 'cheapestkeys' && <Cheapestkeys color={props.color} style={{ width: props.size, height: props.size }} /> }{ props.name === 'github' && <Github color={props.color} style={{ width: props.size, height: props.size }} /> }{ props.name === 'globe' && <Globe color={props.color} style={{ width: props.size, height: props.size }} /> }{ props.name === 'instagram' && <Instagram color={props.color} style={{ width: props.size, height: props.size }} /> }{ props.name === 'linkedin' && <Linkedin color={props.color} style={{ width: props.size, height: props.size }} /> }{ props.name === 'notify' && <Notify color={props.color} style={{ width: props.size, height: props.size }} /> }{ props.name === 'twitter' && <Twitter color={props.color} style={{ width: props.size, height: props.size }} /> }
    </IconBody>
  );
};
const IconBody = styled.div`display: flex;width: fit-content;`;
