"use client";
import { useState, useEffect } from 'react';
import { createAppKit } from '@reown/appkit';
import { Ethers5Adapter } from '@reown/appkit-adapter-ethers5';

const INFT_DATABASE = {
  "1": { name: "Zero-Knowledge AI", cid: "0x9c22...", sig: "0x97e0..." },
  "2": { name: "Storage Optimisation", cid: "0x1fd2...", sig: "0xf3b1..." },
  "3": { name: "Quantum Signatures", cid: "0xbf02...", sig: "0x731e..." },
  "4": { name: "Bio-Inspired Consensus", cid: "0x20e2...", sig: "0x5366..." }
};

export default function Forge() {
  const [currentId, setCurrentId] = useState("3");
  const [address, setAddress] = useState("");

  useEffect(() => {
    const modal = createAppKit({
      adapters: [new Ethers5Adapter()],
      networks: [{
        id: 16661,
        name: '0G Aristotle',
        nativeCurrency: { name: '0G', symbol: '0G', decimals: 18 },
        rpcUrls: { default: { http: ['https://evmrpc.0g.ai'] } }
      }],
      projectId: 'f949826372f883f36a87c1266205e94b',
      features: { analytics: false }
    });
    modal.subscribeAccount(() => setAddress(modal.getAddress() || ""));
  }, []);

  return (
    <div style={{ color: '#00ffcc', fontFamily: 'monospace', textAlign: 'center', padding: '50px' }}>
      <div style={{ border: '1px solid #00ffcc', padding: '30px', display: 'inline-block', background: '#080808' }}>
        <h1>PARADIGM.0G</h1>
        <p style={{ fontSize: '10px' }}>SDK DEPLOYMENT LIVE</p>
        
        <appkit-button />

        {address && (
          <div style={{ marginTop: '20px' }}>
            <div style={{ display: 'flex', gap: '5px', marginBottom: '15px' }}>
              {["1", "2", "3", "4"].map(id => (
                <button key={id} onClick={() => setCurrentId(id)} style={{ flex: 1, background: currentId === id ? '#00ffcc' : '#111', color: currentId === id ? '#000' : '#00ffcc', border: '1px solid #333', cursor: 'pointer' }}>TOKEN {id}</button>
              ))}
            </div>
            <div style={{ textAlign: 'left', fontSize: '11px', background: '#000', padding: '10px', border: '1px solid #222' }}>
              <p><b>PROTOCOL:</b> {INFT_DATABASE[currentId].name}</p>
              <p><b>STORAGE CID:</b> {INFT_DATABASE[currentId].cid}</p>
            </div>
            <button style={{ width: '100%', marginTop: '15px', padding: '10px', background: '#00ffcc', color: '#000', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>DEPLOY TO 0G STORAGE</button>
          </div>
        )}
      </div>
    </div>
  );
        }
