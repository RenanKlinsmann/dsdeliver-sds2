package com.renanmendonca.dsdeliver.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.renanmendonca.dsdeliver.dto.ProductDTO;
import com.renanmendonca.dsdeliver.entities.Product;
import com.renanmendonca.dsdeliver.repositories.ProductRepository;

@Service
public class ProductService {

	/* injestão de dependencia manual sem framework
	private ProductRepository repository;
	
	public ProductService(ProductRepository repository) {
		this.repository = repository;
	}
	*/
	
	@Autowired
	private ProductRepository repository;
	
	@Transactional(readOnly = true)
	public List<ProductDTO> findAll() {
		List<Product> list = repository.findAllByOrderByNameAsc();
		return list.stream().map(x -> new ProductDTO(x)).collect(Collectors.toList());
		}
}