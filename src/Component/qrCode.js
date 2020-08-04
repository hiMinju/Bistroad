import React, { Component } from 'react';
import QRCode from 'qrcode';

class qrCode extends Component {

    state = {
        name: '',
        phone: '',
        url: '',
      }
    
      handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

      handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
      }

      generateQR = (state) => {
        let str = this.state.url
        QRCode.toCanvas(document.getElementById('canvas'), str, function(error) {
             if (error) console.error(error)
             else console.log('success!')
        })
      }

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <input
              name="name"
              placeholder="이름"
              onChange={this.handleChange}
              value={this.state.name}
            />
            <input 
              name="phone"
              placeholder="전화번호"
              onChange={this.handleChange}
              value={this.state.phone}
            />
            <input
                name="url"
                placeholder="주소"
                onChange={this.handleChange}
                value={this.state.url}
            />
            <button type="submit" onClick={this.generateQR}>
              Generate QR code!
          </button>

            <div>
              {this.state.name} {this.state.phone} {this.state.url}
              <canvas id='canvas' />
            </div>
          </form>
        );
      }
}

export default qrCode;