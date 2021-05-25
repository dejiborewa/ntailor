import React from 'react';
import styled from 'styled-components';
import { Label } from '../pages/form';

const Container = styled.div`
  &.neck-shoulder,
  &.sleeve-armWidth,
  &.armWidth-wrist,
  &.chest-belly,
  &.buba-agbada {
    display: flex;
    align-items: center;
    margin: 0.3em 0;
  }

  &.agbada {
    margin: 0.3em 0;
  }

  &.rightChild {
    margin-left: 1em;
  }

  @media (min-width: 389px) {
    &.rightChild,
    &.leftChild {
      min-width: calc(100% / 2);
    }
  }
`;

export const Input = styled.input`
  display: block;
  padding: 0.5em 0;
  margin-top: 0.5em;
  text-indent: 5px;
  border: 1px solid var(--color-darkBg);
  border-radius: 10px;
  width: 100%;
  outline: none;

  &:focus {
    border: 2px solid var(--color-footerBg);
  }

  @media (min-width: 389px) {
    width: calc(100% - 1em);

    &#buba_length,
    &#agbada_length,
    &#trouser_length {
      width: calc(100%);
    }
  }
`;

const FormBubaMobile = (props) => {
  const { selection, onChange } = props;
  return (
    <Container id='form-container-buba'>
      <Container className='buba'>
        <Container className='neck-shoulder'>
          <Container className='leftChild'>
            <Label htmlFor='neck'>Neck</Label>
            <Input
              type='number'
              id='neck'
              required
              onKeyUp={onChange}
              step='.01'
            />
          </Container>
          <Container className='rightChild'>
            <Label htmlFor='back'>Shoulder/Back</Label>
            <Input type='number' id='back' onKeyUp={onChange} step='.01' />
          </Container>
        </Container>
        <Container className='sleeve-armWidth'>
          <Container className='leftChild'>
            <Label htmlFor='sleeve'>Sleeve length</Label>
            <Input
              type='number'
              id='sleeve'
              required
              onKeyUp={onChange}
              step='.01'
            />
          </Container>
          <Container className='rightChild'>
            <Label htmlFor='relaxed_arm'>Arm width relaxed</Label>
            <Input
              type='number'
              id='relaxed_arm'
              required
              onKeyUp={onChange}
              step='.01'
            />
          </Container>
        </Container>
        <Container className='armWidth-wrist'>
          <Container className='leftChild'>
            <Label htmlFor='flexed_arm'>Arm width flexed</Label>
            <Input
              type='number'
              id='flexed_arm'
              required
              onKeyUp={onChange}
              step='.01'
            />
          </Container>
          <Container className='rightChild'>
            <Label htmlFor='wrist'>Wrist Width</Label>
            <Input
              type='number'
              id='wrist'
              required
              onKeyUp={onChange}
              step='.01'
            />
          </Container>
        </Container>
        <Container className='chest-belly'>
          <Container className='leftChild'>
            <Label htmlFor='chest'>Chest</Label>
            <Input
              type='number'
              id='chest'
              required
              onKeyUp={onChange}
              step='.01'
            />
          </Container>
          <Container className='rightChild'>
            <Label htmlFor='belly'>Belly</Label>
            <Input
              type='number'
              id='belly'
              required
              onKeyUp={onChange}
              step='.01'
            />
          </Container>
        </Container>
        {selection.styles.agbada ? (
          <Container className='buba-agbada'>
            <Container className='leftChild'>
              <Label htmlFor='buba_length'>Buba Length</Label>
              <Input
                type='number'
                id='buba_length'
                required
                onKeyUp={onChange}
                step='.01'
              />
            </Container>
            <Container className='rightChild'>
              <Label htmlFor='agbada_sleeve'>Agbada Sleeve</Label>
              <Input
                type='number'
                id='agbada_sleeve'
                required
                onKeyUp={onChange}
                step='.01'
              />
            </Container>
          </Container>
        ) : (
          <Container className='leftChild' style={{ margin: '0.3em 0' }}>
            <Label htmlFor='buba_length'>Buba Length</Label>
            <Input
              type='number'
              id='buba_length'
              required
              onKeyUp={onChange}
              step='.01'
            />
          </Container>
        )}
        {selection.styles.agbada && (
          <Container className='agbada'>
            <Container className='leftChild'>
              <Label htmlFor='agbada_length'>Agbada Length</Label>
              <Input
                type='number'
                id='agbada_length'
                required
                onKeyUp={onChange}
                step='.01'
              />
            </Container>
          </Container>
        )}
      </Container>
    </Container>
  );
};

export default FormBubaMobile;
