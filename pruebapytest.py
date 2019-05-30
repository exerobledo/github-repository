import pytest
import requests
import json
@pytest.fixture
def error_fixture():
    assert 0
def test_ok():
    print("Ok")
def test_fail():
    assert 0
def test_error(error_fixture):
    pass
def test_skip():
    pytest.skip("skipping this test")
def test_xfail():
    pytest.xfail("xfailing this test")
@pytest.mark.xfail(reason="always xfail")
def test_xpass():
    pass

#Prueba devolver todo el string
def ejpprueba():
     r = requests.get('http://localhost:1337/users').content
     return r

#prueba devolver solo el array
if __name__ == '__main__':
    r = ejpprueba()
    print(r)
    prueba = json.loads(r)
    sendList = json.dumps({"data":prueba["data"]["users"].extend([8, 9, 10])})
    print(prueba["data"]["users"])
    z = requests.put('http://localhost:1337/users', data = sendList)
    if requests.ConnectTimeout('http://localhost:1337/users').response == "404":
        print(test_error)

#Prueba realizar put
#print(r)
#Prueba devolver las posiciones 1 y 3 del array