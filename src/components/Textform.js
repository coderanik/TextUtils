import React, { useState } from 'react';
import jsPDF from 'jspdf';

export default function TextForm(props) {
  const [text, setText] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
  };

  const handleClearClick = () => {
    setText('');
    setIsCopied(false);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    setIsCopied(false);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleRemoveSpaces = () => {
    setText(text.replace(/\s+/g, ' ').trim());
  };

  const handleCapitalizeWords = () => {
    setText(text.split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
    );
  };

  const handleReverseText = () => {
    setText(text.split('').reverse().join(''));
  };

  const handleParaphrase = () => {
    const words = text.split(' ');
    const synonyms = {
      'good': 'excellent',
      'bad': 'poor',
      'happy': 'delighted',
      'sad': 'unhappy',
      'big': 'large',
      'small': 'tiny',
      'beautiful': 'gorgeous',
      'quick': 'rapid',
      'slow': 'sluggish',
      'smart': 'intelligent',
    };

    const paraphrased = words.map(word => {
      const lowerWord = word.toLowerCase();
      return synonyms[lowerWord] || word;
    }).join(' ');

    setText(paraphrased);
  };

  const handleDownloadPDF = () => {
    const pdf = new jsPDF();
    const splitText = pdf.splitTextToSize(text, 180);
    pdf.text(15, 15, splitText);
    pdf.save('myText.pdf');
  };

  const handleDownloadTXT = () => {
    const element = document.createElement('a');
    const file = new Blob([text], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = 'myText.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const sentenceCount = text.trim() === '' ? 0 : text.trim().split(/[.!?]+/).filter(Boolean).length;
  const paragraphCount = text.trim() === '' ? 0 : text.trim().split(/\n\s*\n/).filter(Boolean).length;

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      <div className="container">
        <h1 className={`text-center mb-4 ${props.mode === 'dark' ? 'text-light' : 'text-dark'}`}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            rows="8"
            value={text}
            placeholder="Enter your text here..."
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'light' ? "#EFE9D5" : "#71BBB2",
              color: props.mode === 'light' ? "black" : "white"
            }}
          ></textarea>
        </div>
        <div className="d-flex flex-wrap gap-2 mb-4">
          <button 
            className="btn btn-primary"
            onClick={handleUpClick}
            disabled={text.length === 0}
          >
            UPPERCASE
          </button>
          <button 
            className="btn btn-primary"
            onClick={handleLoClick}
            disabled={text.length === 0}
          >
            lowercase
          </button>
          <button 
            className="btn btn-primary"
            onClick={handleCapitalizeWords}
            disabled={text.length === 0}
          >
            Capitalize Words
          </button>
          <button 
            className="btn btn-primary"
            onClick={handleRemoveSpaces}
            disabled={text.length === 0}
          >
            Remove Extra Spaces
          </button>
          <button 
            className="btn btn-primary"
            onClick={handleReverseText}
            disabled={text.length === 0}
          >
            Reverse Text
          </button>
          <button 
            className="btn btn-primary"
            onClick={handleParaphrase}
            disabled={text.length === 0}
          >
            Paraphrase
          </button>
          <button 
            className="btn btn-success"
            onClick={handleCopyClick}
            disabled={text.length === 0}
          >
            {isCopied ? 'Copied!' : 'Copy Text'}
          </button>
          <div className="dropdown">
            <button 
              className="btn btn-info dropdown-toggle" 
              type="button" 
              data-bs-toggle="dropdown" 
              aria-expanded="false"
              disabled={text.length === 0}
            >
              Download As
            </button>
            <ul className="dropdown-menu">
              <li>
                <button className="dropdown-item" onClick={handleDownloadPDF}>
                  PDF Document
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={handleDownloadTXT}>
                  Text File
                </button>
              </li>
            </ul>
          </div>
          <button 
            className="btn btn-danger"
            onClick={handleClearClick}
            disabled={text.length === 0}
          >
            Clear Text
          </button>
        </div>
      </div>
      <div 
        className="container" 
        style={{color: props.mode === 'light' ? "black" : "#EFE9D5"}}
      >
        <h2 className="mb-4">Text Summary</h2>
        <div className="row g-4 mb-4">
          <div className="col-md-3">
            <div className={`card h-100 ${props.mode === 'dark' ? 'bg-dark text-light' : 'bg-light'}`}>
              <div className="card-body text-center">
                <h5 className="card-title">Words</h5>
                <p className="card-text fs-4">{wordCount}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className={`card h-100 ${props.mode === 'dark' ? 'bg-dark text-light' : 'bg-light'}`}>
              <div className="card-body text-center">
                <h5 className="card-title">Characters</h5>
                <p className="card-text fs-4">{text.length}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className={`card h-100 ${props.mode === 'dark' ? 'bg-dark text-light' : 'bg-light'}`}>
              <div className="card-body text-center">
                <h5 className="card-title">Sentences</h5>
                <p className="card-text fs-4">{sentenceCount}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className={`card h-100 ${props.mode === 'dark' ? 'bg-dark text-light' : 'bg-light'}`}>
              <div className="card-body text-center">
                <h5 className="card-title">Paragraphs</h5>
                <p className="card-text fs-4">{paragraphCount}</p>
              </div>
            </div>
          </div>
        </div>
        <p className="mb-4">Estimated reading time: {(0.008 * wordCount).toFixed(2)} minutes</p>
        <h3 className="mb-3">Preview</h3>
        <div className={`border p-4 rounded ${props.mode === 'dark' ? 'border-light' : ''}`}>
          <p className="mb-0">{text.length > 0 ? text : "Nothing to preview"}</p>
        </div>
      </div>
    </div>
  );
}