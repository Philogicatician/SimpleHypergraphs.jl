var documenterSearchIndex = {"docs":
[{"location":"reference/#Reference-1","page":"Reference","title":"Reference","text":"","category":"section"},{"location":"reference/#","page":"Reference","title":"Reference","text":"CurrentModule = SimpleHypergraphs\nDocTestSetup = quote\n    using SimpleHypergraphs\nend","category":"page"},{"location":"reference/#Creating-a-hypergraph-1","page":"Reference","title":"Creating a hypergraph","text":"","category":"section"},{"location":"reference/#","page":"Reference","title":"Reference","text":"Hypergraph\nrandom_model(::Int, ::Int)\nrandom_kuniform_model(::Int, ::Int, ::Int)\nrandom_dregular_model(::Int, ::Int, ::Int)\nrandom_preferential_model","category":"page"},{"location":"reference/#SimpleHypergraphs.Hypergraph","page":"Reference","title":"SimpleHypergraphs.Hypergraph","text":"Hypergraph{T} <: AbstractMatrix{Union{T, Nothing}}\n\nA hypergraph storing information about vertices and hyperedges.\n\nConstructors\n\nHypergraph{T}(n::Integer,k::Integer) where {T<:Real}\nHypergraph{T,V}(n::Integer, k::Integer;\n    v_meta=Vector{Union{V,Nothing}}(nothing, n)\n    ) where {T<:Real, V}\nHypergraph{T,V,E}(n::Integer, k::Integer;\n    v_meta=Vector{Union{V,Nothing}}(nothing, n),\n    he_meta=Vector{Union{E,Nothing}}(nothing, k)\n    ) where {T<:Real, V, E}\nHypergraph{T,V,E,D}(n::Integer, k::Integer,\n    v_meta=Vector{Union{V,Nothing}}(nothing, n),\n    he_meta=Vector{Union{E,Nothing}}(nothing, k)\n    ) where {T<:Real,V,E,D<:AbstractDict{Int,T}}\n\nConstruct a hypergraph with a given number of vertices and hyperedges. Optionally, values of type V can be stored at vertices and values of type E can be stored at hyperedges. By default the hypegraph uses a Dict{Int,T} for the internal data storage, however a different dictionary such as SortedDict to ensure result replicability can be used (e.g. when doing stochastic simulations on hypergraphs).\n\nHypergraph(m::AbstractMatrix{Union{T, Nothing}}) where {T<:Real}\nHypergraph{T, V}(m::AbstractMatrix{Union{T, Nothing}};\n    v_meta=Vector{Union{V,Nothing}}(nothing, size(m,1))\n    ) where {T<:Real, V}\nHypergraph{T, V, E}(m::AbstractMatrix{Union{T, Nothing}};\n    v_meta=Vector{Union{V,Nothing}}(nothing, size(m,1)),\n    he_meta=Vector{Union{E,Nothing}}(nothing, size(m,2))\n    ) where {T<:Real, V, E}\nHypergraph{T, V, E, D}(m::AbstractMatrix{Union{T, Nothing}};\n    v_meta=Vector{Union{V,Nothing}}(nothing, size(m,1)),\n    he_meta=Vector{Union{E,Nothing}}(nothing, size(m,2))\n    ) where {T<:Real, V, E, D<:AbstractDict{Int,T}}\n\nConstruct a hypergraph using its matrix representation. In the matrix representation rows are vertices and columns are hyperedges. Optionally, values of type V can be stored at vertices and values of type E can be stored at hyperedges. By default the hypegraph uses a Dict{Int,T} for the internal data storage, however a different dictionary such as SortedDict to ensure result replicability can be used (e.g. when doing stochastic simulations on hypergraphs).\n\nHypergraph(g::LightGraphs.Graph)\n\nConstructs a hypergraph of degree 2 by making a deep copy of LightGraphs.Graph. A SortedDict will be used for internal data storage of the hypergraph.\n\nArguments\n\nT : type of weight values stored in the hypergraph's adjacency matrix\nV : type of values stored in the vertices of the hypergraph\nE : type of values stored in the edges of the hypergraph\nD : dictionary for storing values the default is Dict{Int, T}\nn : number of vertices\nk : number of hyperedges\nm : a matrix representation rows are vertices and columns are hyperedges\n\n\n\n\n\n","category":"type"},{"location":"reference/#SimpleHypergraphs.random_model-Tuple{Int64,Int64}","page":"Reference","title":"SimpleHypergraphs.random_model","text":"random_model(nVertices::Int, nEdges::Int)\n\nGenerate a random hypergraph without any structural constraints.\n\nThe Algorithm\n\nGiven two integer parameters nVertices and nEdges (the number of nodes and hyperedges, respectively), the algorithm computes - for each hyperedge he={1,...,m} - a random number s ϵ [1, n] (i.e. the hyperedge size). Then, the algorithm selects uniformly at random s vertices from V to be added in he.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SimpleHypergraphs.random_kuniform_model-Tuple{Int64,Int64,Int64}","page":"Reference","title":"SimpleHypergraphs.random_kuniform_model","text":"random_kuniform_model(nVertices::Int, nEdges::Int, k::Int)\n\nGenerates a k-uniform hypergraph, i.e. an hypergraph where each hyperedge has size k.\n\nThe Algorithm\n\nThe algorithm proceeds as the randomH, forcing the size of each hyperedge equal to k.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SimpleHypergraphs.random_dregular_model-Tuple{Int64,Int64,Int64}","page":"Reference","title":"SimpleHypergraphs.random_dregular_model","text":"random_dregular_model(nVertices::Int, nEdges::Int, d::Int)\n\nGenerates a d-regular hypergraph, where each node has degree d.\n\nThe Algorithm\n\nThe algorithm exploits the k-uniform approach described for the randomkuniformmodel method to build a d-regular hypergraph H having nVertices nodes and nEdges edges. It returns the hypergraph H^* dual of H.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SimpleHypergraphs.random_preferential_model","page":"Reference","title":"SimpleHypergraphs.random_preferential_model","text":"random_preferential_model(nVertices::Int, p::Real; H = random_model(5,5))\n\nGenerate a hypergraph with a preferential attachment rule between nodes, as presented in Avin, C., Lotker, Z., and Peleg, D.Random preferential attachment hyper-graphs. Computer Science 23 (2015).\n\nThe Algorithm\n\nThe algorithm starts with a random graph with 5 nodes and 5 edges. For this reason, the generated random graph has at least 5 nodes and 5 edges. It iteratively adds a node or a edge, according to a given parameter p, which defines the probability of creating a new node or a new hyperedge.\n\nMore in detail, the connections with the new node/hyperedge are generated according to a preferential attachment policy defined by p.\n\nThe so-built hypergraph will have nVertices vertices.\n\nThe starting hypergraph can be instantiated as preferred.\n\n\n\n\n\n","category":"function"},{"location":"reference/#Manipulating-vertices-and-hyperedges-1","page":"Reference","title":"Manipulating vertices and hyperedges","text":"","category":"section"},{"location":"reference/#","page":"Reference","title":"Reference","text":"\nadd_hyperedge!(::Hypergraph{T, V, E}; ::Dict{Int,T}, ::Union{E,Nothing} ) where {T <: Real, V, E}\nadd_vertex!(::Hypergraph{T, V, E};::Dict{Int,T},::Union{V,Nothing} ) where {T <: Real, V, E}\nset_vertex_meta!(::Hypergraph{T, V, E}, ::Union{V,Nothing}, ::Int) where {T <: Real, V, E}\nget_vertex_meta(::Hypergraph{T, V, E}, ::Int) where {T <: Real, V, E}\nset_hyperedge_meta!(::Hypergraph{T, V, E}, ::Union{E,Nothing}, ::Int) where {T <: Real, V, E}\nget_hyperedge_meta(::Hypergraph{T, V, E}, ::Int) where {T <: Real, V, E}\nremove_vertex!(::Hypergraph, ::Int)\nremove_hyperedge!(::Hypergraph, ::Int)","category":"page"},{"location":"reference/#SimpleHypergraphs.add_hyperedge!-Union{Tuple{Hypergraph{T,V,E,D} where D<:AbstractDict{Int64,T}}, Tuple{E}, Tuple{V}, Tuple{T}} where E where V where T<:Real","page":"Reference","title":"SimpleHypergraphs.add_hyperedge!","text":"add_hyperedge!(h::Hypergraph{T, V, E, D};\n               vertices::D = D(), he_meta::Union{E,Nothing}=nothing\n               ) where {T <: Real, V, E, D <: AbstractDict{Int,T}}\n\nAdds a hyperedge to a given hypergraph h. Optionally, existing vertices can be added to the created hyperedge. The paramater vertices represents a dictionary of vertex identifiers and values stored at the hyperedges. Additionally, a value can be stored with the hyperedge using the he_meta keyword parameter.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SimpleHypergraphs.add_vertex!-Union{Tuple{Hypergraph{T,V,E,D} where D<:AbstractDict{Int64,T}}, Tuple{E}, Tuple{V}, Tuple{T}} where E where V where T<:Real","page":"Reference","title":"SimpleHypergraphs.add_vertex!","text":"add_vertex!(h::Hypergraph{T, V, E, D};\n            hyperedges::D = D(), v_meta::Union{V,Nothing} = nothing\n            ) where {T <: Real, V, E, D <: AbstractDict{Int,T}}\n\nAdds a vertex to a given hypergraph h. Optionally, the vertex can be added to existing hyperedges. The hyperedges parameter presents a dictionary of hyperedge identifiers and values stored at the hyperedges. Additionally, a value can be stored with the vertex using the v_meta keyword parameter.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SimpleHypergraphs.set_vertex_meta!-Union{Tuple{E}, Tuple{V}, Tuple{T}, Tuple{Hypergraph{T,V,E,D} where D<:AbstractDict{Int64,T},Union{Nothing, V},Int64}} where E where V where T<:Real","page":"Reference","title":"SimpleHypergraphs.set_vertex_meta!","text":"set_vertex_meta!(h::Hypergraph{T, V, E, D}, new_value::Union{V,Nothing},\n    id::Int) where {T <: Real, V, E, D <: AbstractDict{Int,T}}\n\nSets a new meta value new_value for the vertex id in the hypegraph h.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SimpleHypergraphs.get_vertex_meta-Union{Tuple{E}, Tuple{V}, Tuple{T}, Tuple{Hypergraph{T,V,E,D} where D<:AbstractDict{Int64,T},Int64}} where E where V where T<:Real","page":"Reference","title":"SimpleHypergraphs.get_vertex_meta","text":"get_vertex_meta(h::Hypergraph{T, V, E, D}, id::Int\n                ) where {T <: Real, V, E, D <: AbstractDict{Int,T}}\n\nReturns a meta value stored at the vertex id in the hypergraph h.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SimpleHypergraphs.set_hyperedge_meta!-Union{Tuple{E}, Tuple{V}, Tuple{T}, Tuple{Hypergraph{T,V,E,D} where D<:AbstractDict{Int64,T},Union{Nothing, E},Int64}} where E where V where T<:Real","page":"Reference","title":"SimpleHypergraphs.set_hyperedge_meta!","text":"set_hyperedge_meta!(h::Hypergraph{T, V, E, D},\n    new_value::Union{E,Nothing}, id::Int\n    ) where {T <: Real, V, E, D <: AbstractDict{Int,T}}\n\nSets a new meta value new_value for the hyperedge id in the hypegraph h.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SimpleHypergraphs.get_hyperedge_meta-Union{Tuple{E}, Tuple{V}, Tuple{T}, Tuple{Hypergraph{T,V,E,D} where D<:AbstractDict{Int64,T},Int64}} where E where V where T<:Real","page":"Reference","title":"SimpleHypergraphs.get_hyperedge_meta","text":"get_hyperedge_meta(h::Hypergraph{T, V, E, D}, id::Int)\n    where {T <: Real, V, E, D <: AbstractDict{Int,T}}\n\nReturns a meta value stored at the hyperedge id in the hypergraph h.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SimpleHypergraphs.remove_vertex!-Tuple{Hypergraph,Int64}","page":"Reference","title":"SimpleHypergraphs.remove_vertex!","text":"remove_vertex!(h::Hypergraph, v::Int)\n\nRemoves the vertex v from a given hypergraph h. Note that running this function will cause reordering of vertices in the hypergraph: the vertex v will replaced by the last vertex of the hypergraph and the list of vertices will be shrunk.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SimpleHypergraphs.remove_hyperedge!-Tuple{Hypergraph,Int64}","page":"Reference","title":"SimpleHypergraphs.remove_hyperedge!","text":"remove_hyperedge!(h::Hypergraph, e::Int)\n\nRemoves the heyperedge e from a given hypergraph h. Note that running this function will cause reordering of hyperedges in the hypergraph: the hyperedge e will replaced by the last hyperedge of the hypergraph and the list of hyperedges will be shrunk.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Hypergraph-array-getters-and-setters-1","page":"Reference","title":"Hypergraph array getters and setters","text":"","category":"section"},{"location":"reference/#","page":"Reference","title":"Reference","text":"Normally you work with a hypergraph via array setters, for example the code below craete an Hypergraph and add vertex one to hyperedges 2 and 3 with weight 5:","category":"page"},{"location":"reference/#","page":"Reference","title":"Reference","text":"h = Hypergraph{Int64}(2,3);\nh[1, 2:3] .= 5;\nh\n\n# output\n\n2×3 Hypergraph{Int64,Nothing,Nothing,Dict{Int64,Int64}}:\n nothing  5         5\n nothing   nothing   nothing","category":"page"},{"location":"reference/#","page":"Reference","title":"Reference","text":"getindex(::Hypergraph, ::Vararg{Int,2})\nsetindex!(::Hypergraph, ::Nothing, ::Vararg{Int,2})\nsetindex!(::Hypergraph, ::Real, ::Vararg{Int,2})","category":"page"},{"location":"reference/#Base.getindex-Tuple{Hypergraph,Int64,Int64}","page":"Reference","title":"Base.getindex","text":"Base.getindex(h::Hypergraph, idx::Vararg{Int,2})\n\nReturns a value for a given vertex-hyperedge pair idx for a hypergraph h. If a vertex does not belong to a hyperedge nothing is returned.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Base.setindex!-Tuple{Hypergraph,Nothing,Int64,Int64}","page":"Reference","title":"Base.setindex!","text":"Base.setindex!(h::Hypergraph, ::Nothing, idx::Vararg{Int,2})\n\nRemoves a vertex from a given hyperedge for a hypergraph h and a given vertex-hyperedge pair idx. Note that trying to remove a vertex from a hyperedge when it is not present will not throw an error.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Base.setindex!-Tuple{Hypergraph,Real,Int64,Int64}","page":"Reference","title":"Base.setindex!","text":"Base.setindex!(h::Hypergraph, v::Real, idx::Vararg{Int,2})\n\nAdds a vertex to a hyperedge (represented by indices idx) and assigns value v to be stored with that assignment.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Hypergraph-representation-as-LightGraphs'-simple-graphs-1","page":"Reference","title":"Hypergraph representation as LightGraphs' simple graphs","text":"","category":"section"},{"location":"reference/#","page":"Reference","title":"Reference","text":"The goal of those methods is to provide a way to manipulate a hypergraph using the methods from the LightGraphs.jl library. This has been achieved by providing types that are subtypes of the LightGraphs.SimpleGraphs.AbstractSimpleGraph{Int} type along with appropiate methods.","category":"page"},{"location":"reference/#","page":"Reference","title":"Reference","text":"BipartiteView\nshortest_path(::BipartiteView, ::Int, ::Int)\n\nTwoSectionView\nshortest_path(::TwoSectionView, ::Int, ::Int)","category":"page"},{"location":"reference/#SimpleHypergraphs.BipartiteView","page":"Reference","title":"SimpleHypergraphs.BipartiteView","text":"BipartiteView{T<:Real} <: LightGraphs.SimpleGraphs.AbstractSimpleGraph{Int}\n\nRepresents a bipartite view of a hypergraph h. Note this is a view - changes to the original hypergraph will be automatically reflected in the view.\n\nConstructors\n\nBipartiteView(::Hypergraph)\n\nThe bipartite view of a hypergraph is suitable for processing with the LightGraphs.jl package. Several LightGraphs methods are provided for the compability.\n\n\n\n\n\n","category":"type"},{"location":"reference/#SimpleHypergraphs.shortest_path-Tuple{BipartiteView,Int64,Int64}","page":"Reference","title":"SimpleHypergraphs.shortest_path","text":"shortest_path(b::BipartiteView,source::Int, target::Int)\n\nFinds a single shortest path in a graph b between vertices source and target. Note that if several paths of the same length exist, only one will be returned.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SimpleHypergraphs.TwoSectionView","page":"Reference","title":"SimpleHypergraphs.TwoSectionView","text":"TwoSectionView{T<:Real} <: LightGraphs.SimpleGraphs.AbstractSimpleGraph{Int64}\n\nRepresents a 2-section view of a hypergraph h. Note (1) this is a view - changes to the original hypergraph will be automatically reflected in the view.\n\nNote (2) The view will only work correctly for hypergraphs not having overlapping hyperedges. To check whether a graph has overlapping edges try has_overlapping_hedges(h) - for such graph you need to fully materialize it rather than use a view. This can be achieved via the get_twosection_adjacency_mx(h) method.\n\nConstructors\n\nTwoSectionView(::Hypergraph)\n\nThe 2-section view of a hypergraph is suitable for processing with the LightGraphs.jl package. Several LightGraphs methods are provided for the compability.\n\n\n\n\n\n","category":"type"},{"location":"reference/#SimpleHypergraphs.shortest_path-Tuple{TwoSectionView,Int64,Int64}","page":"Reference","title":"SimpleHypergraphs.shortest_path","text":"shortest_path(t::TwoSectionView,source::Int, target::Int)\n\nFinds a single shortest path in a graph b between vertices source and target. Note that if several paths of the same length exist, only one will be returned.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Hypergraph-info-1","page":"Reference","title":"Hypergraph info","text":"","category":"section"},{"location":"reference/#","page":"Reference","title":"Reference","text":"size(::Hypergraph)\nnhv(::Hypergraph)\nnhe(::Hypergraph)\ngetvertices(::Hypergraph, ::Int)\ngethyperedges(::Hypergraph, ::Int)\nget_connected_components(::Hypergraph)\n\nconductance(::Hypergraph, ::Set{Int})\nget_twosection_adjacency_mx\nrandom_walk(::Hypergraph, ::Int; ::Function, ::Function)\n\nmodularity(::Hypergraph, ::Vector{Set{Int}}, ::SimpleHypergraphs.HypergraphAggs)\n\nSimpleHypergraphs.HypergraphAggs\n\nrandompartition(::Int64,::Int64)\nrandompartition(::Hypergraph,::Int64)\n\nAbstractCommunityFinder\nCFModularityRandom\nCFModularityCNMLike\n\nfindcommunities(::Hypergraph, ::CFModularityRandom)\nfindcommunities(::Hypergraph, ::CFModularityCNMLike)","category":"page"},{"location":"reference/#Base.size-Tuple{Hypergraph}","page":"Reference","title":"Base.size","text":"Base.size(h::Hypergraph)\n\nReturns the size of Hypergraph h. The result is a tuple of the number of vertices and the number of hyperedges\n\n\n\n\n\n","category":"method"},{"location":"reference/#SimpleHypergraphs.nhv-Tuple{Hypergraph}","page":"Reference","title":"SimpleHypergraphs.nhv","text":"nhv(h::Hypergraph)\n\nReturn the number of vertices in the hypergraph h.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SimpleHypergraphs.nhe-Tuple{Hypergraph}","page":"Reference","title":"SimpleHypergraphs.nhe","text":"nhe(h::Hypergraph)\n\nReturn the number of hyperedges in the hypergraph h.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SimpleHypergraphs.getvertices-Tuple{Hypergraph,Int64}","page":"Reference","title":"SimpleHypergraphs.getvertices","text":"getvertices(h::Hypergraph, he_id::Int)\n\nReturns vertices from a hypergraph a for a given hyperedge he_id.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SimpleHypergraphs.gethyperedges-Tuple{Hypergraph,Int64}","page":"Reference","title":"SimpleHypergraphs.gethyperedges","text":"gethyperedges(h::Hypergraph, v_id::Int)\n\nReturns hyperedges for a given vertex v_id in a hypergraph h.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SimpleHypergraphs.get_connected_components-Tuple{Hypergraph}","page":"Reference","title":"SimpleHypergraphs.get_connected_components","text":"get_connected_components(h::Hypergraph)\n\nReturn an array of connected components in the hypergraph h (array of vectors of vertices) using recurrence.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SimpleHypergraphs.conductance-Tuple{Hypergraph,Set{Int64}}","page":"Reference","title":"SimpleHypergraphs.conductance","text":"conductance(h::Hypergraph, subset::Set{Int})::Float64\n\nCalculate unweighted hypergraph conductance of subset. note: ∅ ⊊ subset ⊊ 1:nhv(h)\n\nFor more information see 1. Introduction at: Generalizing the Hypergraph Laplacian via a Diffusion Processwith Mediators, auhtors: T-H. Hubert Chan, Xhibin Liang.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SimpleHypergraphs.get_twosection_adjacency_mx","page":"Reference","title":"SimpleHypergraphs.get_twosection_adjacency_mx","text":"get_twosection_adjacency_mx(h::Hypergraph{T,V,E}; count_self_loops::Bool=false,\n                            replace_weights::Union{Nothing,Real}=nothing ) where {T<:Real, V, E}\n\nReturns an adjacency matrix for a two section view of a hypergraph h.\n\n\n\n\n\n","category":"function"},{"location":"reference/#SimpleHypergraphs.random_walk-Tuple{Hypergraph,Int64}","page":"Reference","title":"SimpleHypergraphs.random_walk","text":"random_walk(h::Hypergraph, start::Int; heselect::Function, vselect::Function)\n\nReturn a next vertex visited in assuming a random walk starting from vertex start. First a hyperedge is sampled with weights proportional to heselect function (by default each hyperedge is sampled with the same probability). Next a vertex within hyperedge is with weights proportional to vselect function (by default each vertex, including the source, is sampled with the same probability).\n\nheselect and vselect functions take two arguments a Hypergraph and respectively a vertex identifier or a hyperedge identifier. The return values of both functions should be respectively a list of hyperedges or vertices and their weights.\n\n\n\n\n\n","category":"method"},{"location":"reference/#LightGraphs.modularity-Tuple{Hypergraph,Array{Set{Int64},1},SimpleHypergraphs.HypergraphAggs}","page":"Reference","title":"LightGraphs.modularity","text":"LightGraphs.modularity(h::Hypergraph, partition::Vector{Set{Int}},\n\nha::HypergraphAggs=HypergraphAggs(h))\n\nCalculates the strict modularity of a hypergraph h for a given partition using the precomputed aggregates ha.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SimpleHypergraphs.HypergraphAggs","page":"Reference","title":"SimpleHypergraphs.HypergraphAggs","text":"HypergraphAggs(h::Hypergraph)\n\nPrecomputes vertex and edge basic stats for a hypergraph. The stats are being used for efficiency reasons by community search algorithms.\n\n\n\n\n\n","category":"type"},{"location":"reference/#SimpleHypergraphs.randompartition-Tuple{Int64,Int64}","page":"Reference","title":"SimpleHypergraphs.randompartition","text":"randompartition(N::Int, n::Int)::Vector{Set{Int}}\n\nGenerates a random partition for graph having N vertices into n subsets.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SimpleHypergraphs.randompartition-Tuple{Hypergraph,Int64}","page":"Reference","title":"SimpleHypergraphs.randompartition","text":"randompartition(h::Hypergraph, n::Int)::Vector{Set{Int}}\n\nGenerates a random partition for vertices of a hypergraph h into n subsets.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SimpleHypergraphs.AbstractCommunityFinder","page":"Reference","title":"SimpleHypergraphs.AbstractCommunityFinder","text":"The base type for all algorithms representing various community search patterns. \n\n\n\n\n\n","category":"type"},{"location":"reference/#SimpleHypergraphs.CFModularityRandom","page":"Reference","title":"SimpleHypergraphs.CFModularityRandom","text":"CFModularityRandom(n::Int, reps::Int) <: AbstractCommunityFinder\n\nRepresents a random search over the hypergraph h that finds a partition into n communities (subsets) having the maximum modularity value. During the search reps random n-partitions will be evaluated. If there are many partitions having the same value the first one that was randomly found will be returned.\n\n\n\n\n\n","category":"type"},{"location":"reference/#SimpleHypergraphs.CFModularityCNMLike","page":"Reference","title":"SimpleHypergraphs.CFModularityCNMLike","text":"CFModularityCNMLike(n::Int, reps::Int) <: AbstractCommunityFinder\n\nRepresents a CNM-Like algorithm for finding communities.  In the algorithm we start with a partition where each node is in its own part. Then in each step, we randomly select a hyperedge. Subsequently, we consider merging each set of that parts it touches. We actually merge the parts if the new best modularity is at least as high as the modularity from the previous step. The algortithm iterates through reps of repetitions.\n\nFor more information see Algorithm 1 at: Clustering via Hypergraph Modularity (submitted to Plos ONE), auhtors: Bogumil Kaminski, Valerie Poulin, Pawel Pralat, Przemyslaw Szufel, Francois Theberge\n\n\n\n\n\n","category":"type"},{"location":"reference/#SimpleHypergraphs.findcommunities-Tuple{Hypergraph,CFModularityRandom}","page":"Reference","title":"SimpleHypergraphs.findcommunities","text":"findcommunities(h::Hypergraph, method::CFModularityRandom)\n\nMakes a random search over the hypergraph h and finds a partition into method.n communities (subsets) having the maximum modularity value. During the search method.reps random n-partitions will be evaluated. If there are many partitions having the same value the first one that was randomly found will be returned.\n\nReturns a NamedTuple where the field bp contains partition and the field bm contains the modularity value for that partition.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SimpleHypergraphs.findcommunities-Tuple{Hypergraph,CFModularityCNMLike}","page":"Reference","title":"SimpleHypergraphs.findcommunities","text":"findcommunities(h::Hypergraph, method::CFModularityCNMLike)\n\nIterates a CNM-Like algorithm for finding communities.  In the algorithm we start with a partition where each node is in its own part. Then in each step, we randomly select a hyperedge.   Subsequently, we consider merging each set of that parts it touches.  We actually merge the parts if the new best modularity is at least as high as the modularity from the previous step. \n\nReturns a NamedTuple where the field bp contains partition and the field bm contains the modularity value for that partition, finally, the fiel mod_history represents modularities achieved  in subsequent steps of the algorithm.\n\nFor more information see Algorithm 1 at: Clustering via Hypergraph Modularity (submitted to Plos ONE), authors: Bogumil Kaminski, Valerie Poulin, Pawel Pralat, Przemyslaw Szufel,  Francois Theberge.\n\n\n\n\n\n","category":"method"},{"location":"reference/#I/O-1","page":"Reference","title":"I/O","text":"","category":"section"},{"location":"reference/#","page":"Reference","title":"Reference","text":"hg_save\nhg_load","category":"page"},{"location":"reference/#SimpleHypergraphs.hg_save","page":"Reference","title":"SimpleHypergraphs.hg_save","text":"hg_save(io::IO, h::Hypergraph, format::HGF_Format)\n\nSaves a hypergraph h to an output stream io in hgf format.\n\n\n\n\n\nhg_save(io::IO, h::Hypergraph, format::JSON_Format)\n\nSaves a hypergraph h to an output stream io in json format.\n\nIf h has Composite Types either for vertex metadata or hyperedges metadata, the user has to explicit tell the JSON3 package about it, for instance using:\n\nJSON3.StructType(::Type{MyType}) = JSON3.Struct().\n\nSee the (JSON3.jl documentation)[https://github.com/quinnj/JSON3.jl] for more details.\n\nThe json in output contains the following information (keys):\n\nn : number of vertices\nk : number of hyperedges\nm : a matrix representation of h where rows are vertices and columns are hyperedges\nv2he : mapping vertices to hyperedges\nv_meta : vertices metadata\nhe_meta : hyperedges metadata\n\n\n\n\n\nhg_save(\n    fname::AbstractString, h::Hypergraph;\n    format::Abstract_HG_format=HGF_Format()\n)\n\nSaves a hypergraph h to a file fname in the specified format. The default saving format is hgf.\n\n\n\n\n\n","category":"function"},{"location":"reference/#SimpleHypergraphs.hg_load","page":"Reference","title":"SimpleHypergraphs.hg_load","text":"hg_load(\n    io::IO,\n    format::HGF_Format();\n    T::Type{U} = Bool,\n    D::Type{<:AbstractDict{Int, U}} = Dict{Int,U},\n    V=Nothing,\n    E=Nothing\n) where {U <: Real}\n\nLoads a hypergraph from a stream io from hgf format.\n\nArguments\n\nT : type of weight values stored in the hypergraph's adjacency matrix\nD : dictionary for storing values the default is Dict{Int, T}\nV : type of values stored in the vertices of the hypergraph\nE : type of values stored in the edges of the hypergraph\n\nSkips a single initial comment.\n\n\n\n\n\nhg_load(\n    io::IO,\n    format::JSON_Format;\n    T::Type{U} = Bool,\n    D::Type{<:AbstractDict{Int, U}} = Dict{Int,U},\n    V = Nothing,\n    E = Nothing\n) where {U <: Real}\n\nLoads a hypergraph from a stream io from json format.\n\nArguments\n\nT : type of weight values stored in the hypergraph's adjacency matrix\nD : dictionary for storing values the default is Dict{Int, T}\nV : type of values stored in the vertices of the hypergraph\nE : type of values stored in the edges of the hypergraph\n\n\n\n\n\nhg_load(\n    fname::AbstractString;\n    format::Abstract_HG_format = HGF_Format(),\n    T::Type{U} = Bool,\n    D::Type{<:AbstractDict{Int, U}} = Dict{Int,U},\n    V = Nothing,\n    E = Nothing) where {U <: Real}\n)\n\nLoads a hypergraph from a file fname. The default saving format is hgf.\n\nArguments\n\nT : type of weight values stored in the hypergraph's adjacency matrix\nD : dictionary for storing values the default is Dict{Int, T}\nV : type of values stored in the vertices of the hypergraph\nE : type of values stored in the edges of the hypergraph\n\n\n\n\n\n","category":"function"},{"location":"reference/#Hypergraph-Visualization-1","page":"Reference","title":"Hypergraph Visualization","text":"","category":"section"},{"location":"reference/#","page":"Reference","title":"Reference","text":"draw","category":"page"},{"location":"reference/#SimpleHypergraphs.draw","page":"Reference","title":"SimpleHypergraphs.draw","text":"function draw(\n        h::Hypergraph,\n        type::Type{GraphBased};\n        element::Union{String, Int}=get_next_div_id(),\n        width::Int=500,\n        height::Int=500,\n        radius::Real=10,\n        node_radii::Union{AbstractVector{<:Real}, Nothing}=nothing,\n        node_color::String=\"#999\",\n        node_colors::Union{AbstractVector{String}, Nothing}=nothing,\n        node_stroke::Union{String, Nothing} = nothing,\n        node_strokes::Union{AbstractVector{String}, Nothing}=nothing,\n        stroke_width::Real=0,\n        stroke_widths::Union{AbstractVector{<:Real}, Nothing}=nothing,\n        node_opacity::Real=1,\n        node_opacities::Union{AbstractVector{<:Real}, Nothing}=nothing,\n        stroke_opacity::Real=1,\n        stroke_opacities::Union{AbstractVector{<:Real}, Nothing}=nothing,\n        with_node_labels::Bool=false,\n        node_labels::Union{AbstractVector{String}, Nothing}=nothing,\n        with_node_metadata_hover::Bool=false,\n        with_node_weight::Bool=false,\n        he_colors::Union{AbstractVector{String}, Nothing}=nothing,\n        with_he_labels::Bool=false,\n        he_labels::Union{AbstractVector{String}, Nothing}=nothing,\n        with_he_metadata_hover::Bool=false\n    )\n\nDraw a hypergraph h in a web-based environment (e.g. Jupyter Notebook), using a js script based on the library (D3)[https://d3js.org/]. Each hyperedge he is represented by a fake vertex fv to which each vertex v ∈ he is connected.\n\nArguments\n\nh : the hypergraph to draw\ntype : how the hypergraph will be drawn. If type=GraphBased, each hyperedge\n\nwill be represented as a vertex (see above)\n\nwidth : width of the figure\nheight : height of the figure\nradius : same default radius for each vertex (represented as a circle)\nnode_radii : distinct radius values for each vertex\nnode_color : same default color for each vertex\nnode_colors : distinct node colors for each vertex\nnode_stroke : same default stroke for each vertex\nnode_strokes : distinct node strokes for each vertex\nstroke_width : same default stroke-width for each vertex\nstroke_widths : distinct stroke-width values for each vertex\nnode_opacity : same default opacity for each vertex\nnode_opacities : distinct node-opacity values for each vertex\nstroke_opacity :  same default stroke-opacity for each vertex\nstroke_opacities : distinct stroke-opacity values for each vertex\nwith_node_labels : whether displaying node labels\nnode_labels : node labels to be shown\nwith_node_metadata_hover : whether displaying node metadata when hovering each vertex\nwith_node_weight : whether displaying node weights within each hyperedge\nhe_colors : distinct hyperedge colors for each hyperedge\nwith_he_labels : whether displaying hyoeredges labels\nwith_he_metadata_hover : whether displaying hyperedge metadata when hovering each hyperedge\n\n\n\n\n\ndraw(\n    h::Hypergraph,\n    type::Type{HyperNetX};\n    width::Int=10,\n    height::Int=10,\n    node_labels::Union{Dict{Int, String}, Nothing}=nothing,\n    edge_labels::Union{Dict{Int, String}, Nothing}=nothing,\n    collapse_nodes::Bool=false,\n    collapse_edges::Bool=false,\n    pos::Union{Dict{Int,Pair{Int,Int}}, Nothing}=nothing,\n    with_color::Bool=true,\n    with_node_counts::Bool=false,\n    with_edge_counts::Bool=false,\n    layout::PyObject=nx.spring_layout,\n    layout_kwargs::Dict=Dict{String, Any}(),\n    ax::Union{PyObject, Nothing}=nothing,\n    no_border::Bool=false,\n    edges_kwargs::Dict=Dict{String, Any}(),\n    nodes_kwargs::Dict=Dict{String, Any}(),\n    edge_labels_kwargs::Dict=Dict{String, Any}(),\n    node_labels_kwargs::Dict=Dict{String, Any}(),\n    with_edge_labels::Bool=true,\n    with_node_labels::Bool=true,\n    label_alpha::Float64=.35\n    )\n\nDraw a hypergraph h as an Euler diagram, using the library HyperNetX.\n\nArguments\n\nh : the hypergraph to draw\ntype : how the hypergraph will be drawn. If type=HyperNetX, the hypergraph will be represented as a Euler Diagram\nwidth : width of the figure\nheight : height of the figure\nnode_labels : node labels to be shown\nedge_labels : edge labels to be shown\ncollapse_nodes : draws the hypergraph gotten by identifying nodes contained by the same edges (from HyperNetX)\ncollapse_edges : draws the hypergraph gotten by identifying edges containing the same nodes (from HyperNetX)\nno_border : indicates wheter the figure should have a border\n\nFor more details about the other parameters, please refer to the library HyperNetX.\n\n\n\n\n\n","category":"function"},{"location":"reference/#","page":"Reference","title":"Reference","text":"DocTestSetup = nothing","category":"page"},{"location":"#SimpleHypergraphs.jl-1","page":"SimpleHypergraphs.jl","title":"SimpleHypergraphs.jl","text":"","category":"section"},{"location":"#","page":"SimpleHypergraphs.jl","title":"SimpleHypergraphs.jl","text":"Documentation for SimpleHypergraphs.jl","category":"page"},{"location":"#","page":"SimpleHypergraphs.jl","title":"SimpleHypergraphs.jl","text":"For details please go to the Reference section.","category":"page"}]
}