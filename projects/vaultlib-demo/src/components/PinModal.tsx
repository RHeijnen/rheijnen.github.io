import { useState, useEffect, useRef } from "react";

interface Props {
  mode: "set" | "enter";
  onSuccess: (pin: string) => void;
  onClose: () => void;
}

export function PinModal({ mode, onSuccess, onClose }: Props) {
  const [pin, setPin] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function handleSubmit() {
    if (pin.length < 4) {
      setError("PIN must be at least 4 digits");
      return;
    }
    if (mode === "set") {
      if (pin !== confirm) {
        setError("PINs do not match");
        return;
      }
    }
    onSuccess(pin);
  }

  return (
    <div className="modal-backdrop" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal pin-modal">
        <div className="modal-header">
          <h2>{mode === "set" ? "Set Privacy PIN" : "Enter PIN"}</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
          <p className="pin-desc">
            {mode === "set"
              ? "Set a PIN to protect your private content. You'll need this to unlock it."
              : "Enter your PIN to reveal private content."}
          </p>

          <label className="field-label">PIN</label>
          <input
            ref={inputRef}
            className="field-input pin-input"
            type="password"
            inputMode="numeric"
            maxLength={8}
            value={pin}
            onChange={e => { setPin(e.target.value.replace(/\D/g, "")); setError(""); }}
            onKeyDown={e => e.key === "Enter" && (mode === "set" ? document.getElementById("pin-confirm")?.focus() : handleSubmit())}
            placeholder="••••"
          />

          {mode === "set" && (
            <>
              <label className="field-label" style={{ marginTop: 12 }}>Confirm PIN</label>
              <input
                id="pin-confirm"
                className="field-input pin-input"
                type="password"
                inputMode="numeric"
                maxLength={8}
                value={confirm}
                onChange={e => { setConfirm(e.target.value.replace(/\D/g, "")); setError(""); }}
                onKeyDown={e => e.key === "Enter" && handleSubmit()}
                placeholder="••••"
              />
            </>
          )}

          {error && <div className="pin-error">{error}</div>}
        </div>
        <div className="modal-footer">
          <button className="btn-cancel" onClick={onClose}>Cancel</button>
          <button className="btn-save" onClick={handleSubmit}
            disabled={!pin || (mode === "set" && !confirm)}>
            {mode === "set" ? "Set PIN" : "Unlock"}
          </button>
        </div>
      </div>
    </div>
  );
}
