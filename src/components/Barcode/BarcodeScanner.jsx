import React, { useEffect, useRef } from 'react'
import Quagga from 'quagga'

// A simple barcode scanner component using QuaggaJS.
// Usage: <BarcodeScanner onDetected={(code)=>...} onLookup={(code)=>...} />

export default function BarcodeScanner({ onDetected, onError, onLookup }){
  const ref = useRef(null)

  useEffect(()=>{
    if (!ref.current) return
    Quagga.init({
      inputStream: {
        type: 'LiveStream',
        target: ref.current,
        constraints: {
          facingMode: 'environment' // prefer rear camera
        }
      },
      decoder: {
        readers: ['ean_reader','ean_8_reader','code_128_reader','upc_reader','upc_e_reader']
      }
    }, function(err){
      if (err) {
        onError && onError(err)
        return
      }
      Quagga.start()
    })

    Quagga.onDetected(data => {
      try {
        const code = data.codeResult.code
        // if onLookup is provided, call it to allow searching product by barcode
        if (typeof onLookup === 'function') {
          onLookup(code)
        } else {
          onDetected && onDetected(code)
        }
      } catch(e) { /* ignore */ }
    })

    return ()=>{
      try { Quagga.stop() } catch(e){}
      Quagga.offDetected && Quagga.offDetected()
    }
  },[onDetected, onError, onLookup])

  return <div ref={ref} style={{width:'100%', height:300, background:'#000'}} aria-label="scanner" />
}
