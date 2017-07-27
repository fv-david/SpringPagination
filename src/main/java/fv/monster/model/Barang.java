package fv.monster.model;

import java.io.Serializable;
import java.math.BigDecimal;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

/**
 *
 * @author davidtobing -- fv.davidtobing@gmail.com
 */
@Entity
public class Barang implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    @Lob
    private String description;

    private String imageUrl;

    @NotNull
    @Min(0)
    private BigDecimal price;
    
//    @ManyToMany(fetch = FetchType.EAGER)
//    private List<ProductCategory> categories = new ArrayList<>();

    Barang() { }

    public Barang(String name, String description, String imageUrl, BigDecimal price) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.price = price;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

//    public List<ProductCategory> getCategories() {
//        return Collections.unmodifiableList(categories);
//    }
//
//    public void addToCategory(ProductCategory category) {
//        if (!this.categories.contains(category)) {
//            this.categories.add(category);
//
//            category.addProducts(this);
//        }
//    }
}
