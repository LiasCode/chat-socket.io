import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export function Modal(props) {

  const $rootPortal = document.querySelector("#root-portal");

  useEffect(() => {
    $rootPortal.style.display = "flex";

    return () => {
      $rootPortal.style.display = "none";
    }
  }, [])

  return createPortal(props.children, $rootPortal)
}

