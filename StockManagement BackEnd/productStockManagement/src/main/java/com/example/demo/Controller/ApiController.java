package com.example.demo.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.ApiModel;
import com.example.demo.Service.ApiService;

@RestController
public class ApiController {
 @Autowired
 ApiService service;
 @CrossOrigin(origins = "*")
 @GetMapping("/{id}")
 public Optional<ApiModel> getById(@PathVariable int id){
	 return service.getById(id);
 }
 @CrossOrigin(origins = "*")
 @PostMapping("/product")
 public String add(@RequestBody ApiModel model)
 {
	 return service.addProduct(model);
 }
 @CrossOrigin(origins = "*")
 @GetMapping("/product")
 public List<ApiModel> get()
 {
	 return service.getProduct();
 }
 @CrossOrigin(origins = "*")
 @DeleteMapping("/product/{id}")
 public String delete(@PathVariable int id)
 {
	 return service.deleteProduct(id);
 }
 @CrossOrigin(origins = "*")
 @PutMapping("/product/{id}")
 public String update(@RequestBody ApiModel model)
 {
	 return service.updateProduct(model);
 }


}
