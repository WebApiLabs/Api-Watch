import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

// import functional components to test ---------------------------------a
import LoginButton from '../client/App/Components/LoginButton';
import SearchBar from '../client/App/Components/SearchBar';
import SearchResults from '../client/App/Components/SearchResults';
import SignupButton from '../client/App/Components/SignupButton';

// import containers that hold functional components --------------------
import RibbonContainer from '../client/App/Containers/RibbonContainer';
import SearchContainer from '../client/App/Containers/SearchContainer';

// ----------------------------------------------------------------------

configure({ adapter: new Adapter() });

describe('React unit tests:', () => {
  xdescribe('Ribbon container', () => {
    let wrapper;

    const props = {
      LogInFail: true,
    };

    beforeAll(() => {
      wrapper = mount(<RibbonContainer {...props} />);
    });

    it('Renders a sign-up and login button inside a div', () => {
      expect(wrapper.type()).toEqual('div');
      // expect(wrapper.find('button')).toHaveLength(2);
    })
  })
  
  describe('Signup Button', () => {
    let wrapper;

    const props = {
    };

    beforeAll(() => {
      wrapper = shallow(<SignupButton {...props} />);
    })

    it('Renders a button', () => {
      expect(wrapper.find('button')).toHaveLength(1);
    })
  })

  describe('Login Button', () => {
    let wrapper;

    const props = {
    };

    beforeAll(() => {
      wrapper = shallow(<LoginButton {...props} />);
    })
    
    it('Renders a button', () => {
      expect(wrapper.find('button')).toHaveLength(1);
    })
  })
  
  describe('Search Bar', () => {
    let wrapper;
    const searchJest = jest.fn();

    const props = {
      onEnter: searchJest
    };

    beforeEach(() => {
      wrapper = shallow(<SearchBar {...props}  />)
    })
    
    it('Contains an input field', () => {
      expect(wrapper.find('input')).toHaveLength(1);
    })

    it('Contains a button', () => {
      expect(wrapper.find('button')).toHaveLength(1);      
    })

    xit('Invokes prop drilled function on enter', () => {
      wrapper.find('.search').simulate('click');
      expect(searchJest.mock.calls).toHaveLength(1);
    })
  })
  
  describe('Search Results', () => {
    let wrapper;


    const props = {
      key: 4206969,
      books: {
        title: 'test title',
        selfLink: 'test link',        
        author: 'test author'
      }
    }

    beforeEach(() => {
      wrapper = shallow(<SearchResults {...props}  />)
    })

    // it('should display all of its text props inside a LabeledText component', () => {
    //   expect(wrapper.find(LabeledText)).toHaveLength(4)
    //   expect(wrapper.find({ label: "Market ID"}).prop('text')).toEqual(12)
    //   expect(wrapper.find({ label: "Location"}).prop('text')).toEqual('Shanghai')
    //   expect(wrapper.find({ label: "Cards"}).prop('text')).toEqual(100)
    //   expect(wrapper.find({ label: "% of total"}).prop('text')).toEqual(50)
    // });
    it('Should create 3 p tags', () => {
      expect(wrapper.find('p')).toHaveLength(3);
    })

    xit('should render a table with p fields that display title, seflLink, and author', () => {
      expect(wrapper.find('datainformation1').prop('text')).toEqual('test title');
      expect(wrapper.find('datainformation2').prop('text')).toEqual('test author');
      expect(wrapper.find('datainformation3').prop('text')).toEqual('test link');
    })
  })
})