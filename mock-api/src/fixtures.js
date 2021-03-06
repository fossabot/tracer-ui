// Copyright 2019 Blockchain Technology Partners
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// ------------------------------------------------------------------------------
const read = [{events: [{
  eventType: 'sawtooth/daml',
  attributes: [{key:'k1',value:'1'},{key:'k2',value:'2'}],
},{
  eventType: 'sawtooth/data',
  attributes: [{key:'k1',value:'1'},{key:'k2',value:'2'}],
  data: '123456',
},{
  eventType: 'sawtooth/something',
  attributes: [{key:'k1',value:'1'},{key:'k2',value:'2'}],
}]},{events: [{
  eventType: 'sawtooth/daml',
  attributes: [{key:'k1',value:'1'},{key:'k2',value:'2'}],
},{
  eventType: 'sawtooth/blockchain',
  attributes: [{key:'k1',value:'1'},{key:'k2',value:'2'}],
},{
  eventType: 'sawtooth/blockchain',
  attributes: [{key:'k1',value:'1'},{key:'k2',value:'2'}],
}]}]

const write = [{events:[{
  eventType: 'sawtooth/data',
  attributes: [{key:'k1',value:'1'},{key:'k2',value:'2'}],
  data: 'wwwwass',
},{
  eventType: 'sawtooth/something',
  attributes: [{key:'k1',value:'1'},{key:'k2',value:'2'}],
},{
  eventType: 'sawtooth/data',
  attributes: [{key:'k1',value:'1'},{key:'k2',value:'2'}],
  data: 'qswer3',
}]},{events:[{
  eventType: 'sawtooth/blockchain',
  attributes: [{key:'k1',value:'1'},{key:'k2',value:'2'}],
},{
  eventType: 'sawtooth/data',
  attributes: [{key:'k1',value:'1'},{key:'k2',value:'2'}],
  data: 'wsssss',
},{
  eventType: 'sawtooth/blockchain',
  attributes: [{key:'k1',value:'1'},{key:'k2',value:'2'}],
}]}]

module.exports = {
  transactions: {
    read,
    write,
  }
}

