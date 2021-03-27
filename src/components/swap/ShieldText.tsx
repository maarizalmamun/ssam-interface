import React from 'react'
import styled from 'styled-components'
import { ReactComponent as ShieldIcon } from '../../assets/svg/shield.svg'

const BadgeDiv = styled.div`
  display: 'inline-flex';
  justifycontent: 'center';
  padding: '9px 16px';
  alignitems: 'center';
  height: '30px';
  margin: '32px auto 0 auto';
  borderradius: '40px';
  background: 'rgba(97, 183, 95, 0.1)';
`

const BadgeP = styled.p`
  color: '#61B75F';
  fontsize: '12px';
  fontweight: 500;
  marginleft: '6px';
`

export default function ShieldText() {
  return (
    <BadgeDiv>
      <ShieldIcon />
      <BadgeP>Safe staking with ssam </BadgeP>
    </BadgeDiv>
  )
}
