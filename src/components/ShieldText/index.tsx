import React from 'react'
import styled from 'styled-components'
import {ReactComponent as ShieldIcon} from '../../assets/svg/shield.svg'

const BadgeDiv = styled.div`
    display: inline-flex;
    justify-content: center;
    flex-wrap: nowrap;
    padding: 9px 16px;
    align-items: center;
    height: 30px;
    margin: 10px auto 0 auto;
    border-radius: 40px;
    background: rgba(97, 183, 95, 0.1);
`

const BadgeP = styled.p`
    color: #61B75F;
    font-size: 12px;
    font-weight: 500;
    margin-left: 6px;
`
// 

interface ShieldTextProps {
    text: string
}

export default function ShieldText({
    text
}: ShieldTextProps){
  return (
    <BadgeDiv>
        <ShieldIcon/>
        <BadgeP> {text} </BadgeP>
    </BadgeDiv>

  )
}

/**
 
 

export default function ShieldText({
    text
}: ShieldTextProps){
  return (
    <BadgeDiv>
        <ShieldIcon/>
        <BadgeP> {text} </BadgeP>
    </BadgeDiv>
  )
} 

 
 */