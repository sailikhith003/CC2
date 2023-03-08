package com.example.demo.Service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.ApiModel;
import com.example.demo.repository.ApiRepository;

@Service
public class ApiService {
@Autowired
ApiRepository rep;
public Optional<ApiModel> getById(int id) {
	return rep.findById(id);
}

public String addProduct(ApiModel model)
{
	rep.save(model);
	return "added";
}
public List<ApiModel> getProduct()
{
	return rep.findAll();
}
public String deleteProduct(int id)
{
	rep.deleteById(id);
	return "deleted";
}
public String updateProduct(ApiModel model)
{
	rep.save(model);
	return "updated";
}
}
