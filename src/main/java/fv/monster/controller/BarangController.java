package fv.monster.controller;

import fv.monster.model.Barang;
import fv.monster.repository.BarangRepository;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author davidtobing -- fv.davidtobing@gmail.com
 */
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class BarangController {

    private final BarangRepository barangRepository;

    @Autowired
    private BarangController(BarangRepository barangRepository) {
        this.barangRepository = barangRepository;
    }

    @GetMapping("/barangs")
    Page<Barang> listProducts(Pageable page) {
        Page<Barang> barangs = barangRepository.findAll(page);
        return barangs;
    }

    @PostMapping("/barang")
    public Barang addProduct(@RequestBody @Valid Barang product) {
        return barangRepository.save(product);
    }

    @GetMapping("/barang/{id}")
    @ResponseBody
    public Barang getById(@PathVariable Long id) {
        return barangRepository.findOne(id);
    }

    @PutMapping("/barang")
    public Barang updateProduct(@RequestBody @Valid Barang product) {
        return barangRepository.save(product);
    }

    @DeleteMapping("/barang/{id}")
    public void deleteProduct(@PathVariable Long id) {
        barangRepository.delete(id);
    }

}
